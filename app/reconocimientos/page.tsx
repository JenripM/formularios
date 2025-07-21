"use client";
import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import useFirestore from "../../hooks/useFirestore";

// Configura tu Supabase client
const supabase = createClient(
  "https://upfgpsvidjcdnnpyyhoh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwZmdwc3ZpZGpjZG5ucHl5aG9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMzE0MjcsImV4cCI6MjA2NjkwNzQyN30.m-GvmEVT10JmoUUqo2e3OqzImncZM9TPHwVVSBTMsMw"
);

export default function ReconocimientosPage() {
  const { addDocument, loading, error } = useFirestore();

  const [titulo, setTitulo] = useState("");
  const [imagen1, setImagen1] = useState("");
  const [imagen2, setImagen2] = useState("");
  const [imagen3, setImagen3] = useState("");
  const [texto1, setTexto1] = useState("");
  const [texto2, setTexto2] = useState("");
  const [texto3, setTexto3] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, imageType: "imagen1" | "imagen2" | "imagen3") => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    try {
      const filePath = `imagenes/${Date.now()}_${file.name}`;
      const { data, error } = await supabase.storage
        .from("reconocimientos") // Tu bucket de imágenes
        .upload(filePath, file);

      if (error) throw error;

      const { data: publicUrlData } = supabase.storage
        .from("reconocimientos")
        .getPublicUrl(filePath);

      if (publicUrlData?.publicUrl) {
        if (imageType === "imagen1") {
          setImagen1(publicUrlData.publicUrl);
        } else if (imageType === "imagen2") {
          setImagen2(publicUrlData.publicUrl);
        } else {
          setImagen3(publicUrlData.publicUrl);
        }
        alert("Imagen subida correctamente");
      } else {
        throw new Error("No se pudo obtener la URL pública");
      }
    } catch (err) {
      console.error(err);
      alert("Error al subir la imagen.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      titulo,
      imagen1,
      imagen2,
      imagen3,
      texto1,
      texto2,
      texto3,
      fechaRegistro: new Date(),
    };

    try {
      const id = await addDocument("reconocimientos", data);
      alert("Reconocimiento guardado con éxito" + (id ? ` con ID: ${id}` : ""));
      window.location.reload();
    } catch (err) {
      alert("Ocurrió un error al guardar el reconocimiento.");
      console.error(err);
    }
  };

  return (
    <main className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Agregar Reconocimiento</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <label className="block">
          <span className="text-gray-700 font-semibold mb-1 block">Título</span>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            disabled={loading || uploading}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-semibold mb-1 block">Imagen 1</span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, "imagen1")}
            disabled={loading || uploading}
            className="w-full"
          />
          {uploading && (
            <p className="mt-2 text-sm text-blue-600 font-medium">Subiendo archivo...</p>
          )}
          {imagen1 && (
            <a
              href={imagen1}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-700 underline"
            >
              Ver imagen subida
            </a>
          )}
        </label>

        <label className="block">
          <span className="text-gray-700 font-semibold mb-1 block">Imagen 2</span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, "imagen2")}
            disabled={loading || uploading}
            className="w-full"
          />
          {imagen2 && (
            <a
              href={imagen2}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-700 underline"
            >
              Ver imagen subida
            </a>
          )}
        </label>

        <label className="block">
          <span className="text-gray-700 font-semibold mb-1 block">Imagen 3</span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, "imagen3")}
            disabled={loading || uploading}
            className="w-full"
          />
          {imagen3 && (
            <a
              href={imagen3}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-700 underline"
            >
              Ver imagen subida
            </a>
          )}
        </label>

        <label className="block">
          <span className="text-gray-700 font-semibold mb-1 block">Texto 1</span>
          <textarea
            value={texto1}
            onChange={(e) => setTexto1(e.target.value)}
            disabled={loading || uploading}
            rows={4}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-semibold mb-1 block">Texto 2</span>
          <textarea
            value={texto2}
            onChange={(e) => setTexto2(e.target.value)}
            disabled={loading || uploading}
            rows={4}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-semibold mb-1 block">Texto 3</span>
          <textarea
            value={texto3}
            onChange={(e) => setTexto3(e.target.value)}
            disabled={loading || uploading}
            rows={4}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </label>

        <button
          type="submit"
          disabled={loading || uploading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition disabled:opacity-50"
        >
          Guardar Reconocimiento
        </button>

        {error && <p className="text-red-600 font-semibold mt-3">Error: {error}</p>}
      </form>
    </main>
  );
}
