"use client";
import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Configura tu Supabase client
const supabase = createClient(
  "https://upfgpsvidjcdnnpyyhoh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwZmdwc3ZpZGpjZG5ucHl5aG9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMzE0MjcsImV4cCI6MjA2NjkwNzQyN30.m-GvmEVT10JmoUUqo2e3OqzImncZM9TPHwVVSBTMsMw"
);

export default function FotosPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const filesArray = Array.from(selectedFiles);
      setFiles((prevFiles) => [...prevFiles, ...filesArray].slice(0, 30)); // Limitar a 30 archivos
    }
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      alert("Por favor selecciona al menos una foto.");
      return;
    }

    setUploading(true);

    try {
      const fileUrls = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const filePath = `fotos/${Date.now()}_${file.name}`;
        const { data, error } = await supabase.storage
          .from("fotos") // Tu bucket de imágenes
          .upload(filePath, file);

        if (error) throw error;

        const { data: publicUrlData } = supabase.storage
          .from("fotos")
          .getPublicUrl(filePath);

        if (publicUrlData?.publicUrl) {
          fileUrls.push(publicUrlData.publicUrl);
        } else {
          throw new Error("No se pudo obtener la URL pública");
        }
      }

      alert("Fotos subidas correctamente");
      console.log(fileUrls); // Muestra las URLs de las fotos subidas en consola
      setFiles([]); // Limpiar archivos seleccionados después de la carga
    } catch (err) {
      console.error(err);
      alert("Error al subir las fotos.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Subir Fotos</h1>

      <div className="space-y-4">
        <label className="block">
          <span className="text-gray-700 font-semibold mb-1 block">
            Selecciona hasta 30 fotos
          </span>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            disabled={uploading}
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <p className="mt-2 text-sm text-gray-600">Puedes seleccionar hasta 30 fotos.</p>
        </label>

        <div className="grid grid-cols-3 gap-2">
          {files.map((file, index) => (
            <div key={index} className="w-24 h-24 bg-gray-100 rounded-md">
              <img
                src={URL.createObjectURL(file)}
                alt={`file-preview-${index}`}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleUpload}
          disabled={uploading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition disabled:opacity-50"
        >
          {uploading ? "Subiendo..." : "Subir Fotos"}
        </button>
      </div>
    </main>
  );
}
