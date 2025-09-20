"use client";

import React, { useState } from "react";
import Layout from "../orders/Layout";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "10px",
  marginTop: "10px",
};

const defaultCenter = { lat: 30.0444, lng: 31.2357 }; // Cairo default center

const AddressesPage = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Home",
      details: "30.0444, 31.2357", // Cairo coords
      phone: "01012345678",
    },
    {
      id: 2,
      name: "Office",
      details: "31.2001, 29.9187", // Alexandria coords
      phone: "01298765432",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [formData, setFormData] = useState({ name: "", details: "", phone: "" });
  const [marker, setMarker] = useState(null);

  // Load Google Maps API once
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Open Add modal
  const openAddModal = () => {
    setFormData({ name: "", details: "", phone: "" });
    setMarker(null);
    setIsEditing(false);
    setShowModal(true);
  };

  // Open Edit modal
  const openEditModal = (addr) => {
    setFormData(addr);
    setCurrentId(addr.id);

    if (addr.details.includes(",")) {
      const [lat, lng] = addr.details.split(",").map((n) => parseFloat(n));
      setMarker({ lat, lng });
    }

    setIsEditing(true);
    setShowModal(true);
  };

  // Save Address (Add or Edit)
  const handleSave = () => {
    if (!formData.name || !formData.details || !formData.phone) {
      alert("Please fill all fields");
      return;
    }

    const phoneRegex = /^(010|011|012|015)\d{8}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Phone number must start with 010, 011, 012, or 015 and be 11 digits.");
      return;
    }

    if (isEditing) {
      setAddresses((prev) =>
        prev.map((addr) =>
          addr.id === currentId ? { ...addr, ...formData } : addr
        )
      );
    } else {
      const newEntry = {
        id: addresses.length + 1,
        ...formData,
      };
      setAddresses([...addresses, newEntry]);
    }

    setShowModal(false);
  };

  // Delete address
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this address?")) {
      setAddresses((prev) => prev.filter((addr) => addr.id !== id));
    }
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Addresses</h1>
        <button
          onClick={openAddModal}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          + Add New Address
        </button>
      </div>

      {addresses.length === 0 ? (
        <p className="text-gray-500">You have no saved addresses.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className="p-6 bg-white border border-gray-200 rounded-2xl shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900">{addr.name}</h3>
              {addr.details.includes(",") ? (
                <p
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        addr.details
                      )}`
                    )
                  }
                  className="mt-2 text-blue-600 underline cursor-pointer"
                >
                  View on Map
                </p>
              ) : (
                <p className="mt-2 text-gray-600">{addr.details}</p>
              )}
              <p className="text-gray-600">{addr.phone}</p>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => openEditModal(addr)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(addr.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/30 z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 overflow-y-auto max-h-screen">
            <h2 className="text-xl font-semibold mb-4">
              {isEditing ? "Edit Address" : "Add New Address"}
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Address Name (e.g., Home, Office)"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />

              {/* Map */}
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={marker || defaultCenter}
                  zoom={12}
                  onClick={(e) => {
                    const coords = {
                      lat: e.latLng.lat(),
                      lng: e.latLng.lng(),
                    };
                    setMarker(coords);
                    setFormData({
                      ...formData,
                      details: `${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}`,
                    });
                  }}
                >
                  {marker && <Marker position={marker} />}
                </GoogleMap>
              ) : (
                <p className="text-gray-500 text-center mt-2">Loading map...</p>
              )}

              <input
                type="text"
                name="details"
                placeholder="Coordinates (click map to select)"
                value={formData.details}
                readOnly
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-600"
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                {isEditing ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default AddressesPage;
