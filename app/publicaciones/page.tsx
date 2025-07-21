"use client";
import React, { useState } from "react";
import useFirestore from "../../hooks/useFirestore";
import { createClient } from "@supabase/supabase-js";

// Configura tu Supabase client
const supabase = createClient(
  "https://hwhdshpsvgyayqjhmnss.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3aGRzaHBzdmd5YXlxamhtbnNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1NTQwODMsImV4cCI6MjA2ODEzMDA4M30.5JtbhfSc21JQzcN9E8OkzjvKaxhlCKRCtYFv4aNOrU0"
);

export default function PublicacionesPage() {
  const { addDocument, loading, error } = useFirestore();

  const [tipoPublicacion, setTipoPublicacion] = useState<string>("");
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [linkoriginal, setLinkOriginal] = useState("");
  const [orden, setOrden] = useState("");
  const [texto, setTexto] = useState("");
  const [enlace, setEnlace] = useState("");
  const [imagenInicial, setImagenInicial] = useState("");
  const [imagenSecundaria, setImagenSecundaria] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, isSecondary: boolean = false) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    try {
      const filePath = `fotos/${Date.now()}_${file.name}`;
      const { data, error } = await supabase.storage
        .from("publicacionesrecientes2") // Tu bucket de imágenes
        .upload(filePath, file);

      if (error) throw error;

      const { data: publicUrlData } = supabase.storage
        .from("publicacionesrecientes2")
        .getPublicUrl(filePath);

      if (publicUrlData?.publicUrl) {
        if (isSecondary) {
          setImagenSecundaria(publicUrlData.publicUrl);
        } else {
          setImagenInicial(publicUrlData.publicUrl);
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

    if (!titulo.trim() || !subtitulo.trim() || !texto.trim()) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    if (!imagenInicial) {
      alert("Por favor sube una imagen inicial.");
      return;
    }

    const data = {
      tipoPublicacion,
      titulo,
      subtitulo,
      texto,
      enlace,
      linkoriginal,
      orden,

      imagenInicial,
      imagenSecundaria,
      fechaRegistro: new Date(),
    };

    try {
      const id = await addDocument("publicacionesrecientes", data);
      alert("Publicación guardada con éxito" + (id ? ` con ID: ${id}` : ""));
      window.location.reload();
    } catch (err) {
      alert("Ocurrió un error al guardar la publicación.");
      console.error(err);
    }
  };

  return (
    <main className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Agregar Publicación Reciente</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <label className="block">
          <span className="text-gray-700 font-semibold mb-1 block">Tipo de Publicación *</span>
          <select
            value={tipoPublicacion}
            onChange={(e) => setTipoPublicacion(e.target.value)}
            disabled={loading || uploading}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Selecciona tipo de publicación</option>
            <option value="Articulos">Artículos</option>
            <option value="Videos">Videos</option>
            <option value="Infografias">Infografías</option>
            <option value="Entrevistas">Entrevistas</option>
            <option value="Menciones">Menciones</option>
            <option value="Portadas en revistas">Portadas en revistas</option>
            <option value="Menciones y Colaboraciones en Libro">Menciones y Colaboraciones en Libro</option>
          </select>
        </label>

        {tipoPublicacion && (
          <>
            <label className="block">
              <span className="text-gray-700 font-semibold mb-1 block">Imagen Inicial *</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e)}
                disabled={loading || uploading}
                className="w-full"
              />
              {uploading && (
                <p className="mt-2 text-sm text-blue-600 font-medium">Subiendo archivo...</p>
              )}
              {imagenInicial && (
                <a
                  href={imagenInicial}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2 text-blue-700 underline"
                >
                  Ver imagen subida
                </a>
              )}
            </label>

            {tipoPublicacion === "Articulos" || tipoPublicacion === "Menciones" || tipoPublicacion === "Infografias" || tipoPublicacion === "Videos" || tipoPublicacion === "Entrevistas" || tipoPublicacion === "Portadas en revistas" || tipoPublicacion === "Menciones y Colaboraciones en Libro" ? (
              <>
                <label className="block">
                  <span className="text-gray-700 font-semibold mb-1 block">Título *</span>
                  <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    disabled={loading || uploading}
                    required
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </label>

                <label className="block">
                  <span className="text-gray-700 font-semibold mb-1 block">Imagen Secundaria *</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, true)}
                    disabled={loading || uploading}
                    className="w-full"
                  />
                  {imagenSecundaria && (
                    <a
                      href={imagenSecundaria}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-2 text-blue-700 underline"
                    >
                      Ver imagen secundaria subida
                    </a>
                  )}
                </label>
              </>
            ) : null}


            
            <label className="block">
              <span className="text-gray-700 font-semibold mb-1 block">Orden *</span>
              <input
                type="text"
                value={orden}
                onChange={(e) => setOrden(e.target.value)}
                disabled={loading || uploading}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </label>


            <label className="block">
              <span className="text-gray-700 font-semibold mb-1 block">Subtítulo *</span>
              <input
                type="text"
                value={subtitulo}
                onChange={(e) => setSubtitulo(e.target.value)}
                disabled={loading || uploading}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-semibold mb-1 block">Texto *</span>
              <textarea
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                disabled={loading || uploading}
                required
                rows={4}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-semibold mb-1 block">Link Original *</span>
              <input
                type="text"
                value={linkoriginal}
                onChange={(e) => setLinkOriginal(e.target.value)}
                disabled={loading || uploading}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </label>

            {tipoPublicacion === "Videos" || tipoPublicacion === "Entrevistas"  ? (
              <label className="block">
                <span className="text-gray-700 font-semibold mb-1 block">Enlace de YouTube *</span>
                <input
                  type="url"
                  value={enlace}
                  onChange={(e) => setEnlace(e.target.value)}
                  disabled={loading || uploading}
                  required
                  placeholder="https://www.youtube.com/..."
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </label>
            ) : null}
          </>
        )}

        <button
          type="submit"
          disabled={loading || uploading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition disabled:opacity-50"
        >
          Guardar Publicación
        </button>

        {error && <p className="text-red-600 font-semibold mt-3">Error: {error}</p>}
      </form>
    </main>
  );
}
