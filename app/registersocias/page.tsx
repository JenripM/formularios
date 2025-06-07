"use client";
import React, { useState } from "react";
import useFirestore from "../../hooks/useFirestore";
import { createClient } from "@supabase/supabase-js";

// Configura tu Supabase client
const supabase = createClient(
  "https://mhiqizninpbfeixpakbm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oaXFpem5pbnBiZmVpeHBha2JtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0OTIyMzEwMCwiZXhwIjoyMDY0Nzk5MTAwfQ.Bl2R-n0ZeRbDn34dOH7fdkbLowFUybJ46mJPJQ03ovY"
);

export default function ResearchPage() {
  const { addDocument, loading, error } = useFirestore();

  const [nombres, setNombres] = useState("");
  const [cargo, setCargo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [curriculum, setCurriculum] = useState("");
  const [imagenUrl, setImagenUrl] = useState("");
  const [uploading, setUploading] = useState(false);

const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  setUploading(true);

  try {
    const filePath = `imagenes/${Date.now()}_${file.name}`;

    const { data, error } = await supabase.storage
      .from("img") // Tu bucket de imágenes
      .upload(filePath, file);

    if (error) throw error;

    const { data: publicUrlData } = supabase.storage
      .from("img")
      .getPublicUrl(filePath);

    if (publicUrlData?.publicUrl) {
      setImagenUrl(publicUrlData.publicUrl);
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


  const handleCurriculumUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Por favor sube un archivo PDF.");
      return;
    }

    setUploading(true);

    try {
      const filePath = `curriculums/${Date.now()}_${file.name}`;

      const { data, error } = await supabase.storage
        .from("galeri") // Asegúrate de que este bucket existe
        .upload(filePath, file);

      if (error) throw error;

      const { data: publicUrlData } = supabase.storage
        .from("galeri")
        .getPublicUrl(filePath);

      if (publicUrlData?.publicUrl) {
        setCurriculum(publicUrlData.publicUrl);
        alert("Currículum subido correctamente");
      }
    } catch (err) {
      console.error(err);
      alert("Error al subir el currículum.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !nombres.trim() ||
      !descripcion.trim() ||
      !curriculum.trim()
    ) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    if (!imagenUrl) {
      alert("Por favor sube una foto.");
      return;
    }

    const data = {
      nombres: nombres.trim(),
      cargo: cargo.trim(),
      descripcion: descripcion.trim(),
      linkedin: linkedin.trim(),
      curriculum,
      imagenUrl,
      fechaRegistro: new Date(),
    };

    try {
      const id = await addDocument("equipo", data);

      alert("Miembro del equipo guardado con éxito" + (id ? ` con ID: ${id}` : ""));
      window.location.reload();
    } catch (err) {
      alert("Ocurrió un error al guardar el miembro.");
      console.error(err);
    }
  };

  return (
    <main className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Agregar Miembro del Equipo</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
 <label className="block">
          <span className="text-gray-700 font-semibold mb-1 block">Nombres Completos *</span>
          <input
            type="text"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            disabled={loading || uploading}
            required
            placeholder="Ej. Juan Pérez"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-semibold mb-1 block">Cargo *</span>
          <input
            type="text"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
            disabled={loading || uploading}
            required
            placeholder="Ej. Coordinador de Proyectos"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-semibold mb-1 block">Breve Descripción *</span>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            disabled={loading || uploading}
            required
            rows={4}
            placeholder="Una pequeña reseña del profesional"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-semibold mb-1 block">LinkedIn *</span>
          <input
            type="url"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            disabled={loading || uploading}
            placeholder="https://linkedin.com/in/usuario"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </label>


        <label className="block">
          <span className="text-gray-700 font-semibold mb-1 block">Currículum (PDF) *</span>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleCurriculumUpload}
            disabled={loading || uploading}
            required
            className="w-full"
          />
          {curriculum && (
            <a
              href={curriculum}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-700 underline"
            >
              Ver currículum subido
            </a>
          )}
        </label>

        <label className="block">
          <span className="text-gray-700 font-semibold mb-1 block">Subir Foto *</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={loading || uploading}
            className="w-full"
          />
          {uploading && (
            <p className="mt-2 text-sm text-blue-600 font-medium">Subiendo archivo...</p>
          )}
          {imagenUrl && (
            <a
              href={imagenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-700 underline"
            >
              Ver imagen subida
            </a>
          )}
        </label>

        <button
          type="submit"
          disabled={loading || uploading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition disabled:opacity-50"
        >
          Guardar Miembro
        </button>

        {error && <p className="text-red-600 font-semibold mt-3">Error: {error}</p>}
      </form>
    </main>
  );
}
