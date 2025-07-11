"use client";
import { useState } from "react";
export default function AssociationForm() {
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/unete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error en el envío");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
          <input type="text" id="nombre" name="Nombre" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="apellido1" className="block text-sm font-medium text-gray-700 mb-2">Apellido 1 *</label>
          <input type="text" id="apellido1" name="Apellido 1" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="apellido2" className="block text-sm font-medium text-gray-700 mb-2">Apellido 2</label>
          <input type="text" id="apellido2" name="Apellido 2" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="dni" className="block text-sm font-medium text-gray-700 mb-2">DNI o NIE</label>
          <input type="text" id="dni" name="DNI o NIE" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico *</label>
          <input type="email" id="email" name="Correo electrónico" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
          <input type="tel" id="telefono" name="Teléfono" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="poblacion" className="block text-sm font-medium text-gray-700 mb-2">Población de residencia</label>
          <input type="text" id="poblacion" name="Población de residencia" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="provincia" className="block text-sm font-medium text-gray-700 mb-2">Provincia</label>
          <input type="text" id="provincia" name="Provincia" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="direccion" className="block text-sm font-medium text-gray-700 mb-2">Dirección completa</label>
          <input type="text" id="direccion" name="Dirección completa" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="preferencias" className="block text-sm font-medium text-gray-700 mb-2">Preferencias de contacto</label>
          <select id="preferencias" name="Preferencias de contacto" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent">
            <option value="">Selecciona una opción</option>
            <option value="teléfono">Teléfono</option>
            <option value="email">Email</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="redes" className="block text-sm font-medium text-gray-700 mb-2">¿Cuál es tu perfil en redes sociales?</label>
          <input type="text" id="redes" name="Perfil en redes sociales" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent" />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="conocido" className="block text-sm font-medium text-gray-700 mb-2">¿Cómo nos has conocido?</label>
          <div className="space-y-2">
            <div>
              <input type="checkbox" id="amigo" name="Cómo nos has conocido" value="Por una amiga/amigo" className="mr-2" />
              <label htmlFor="amigo">Por una amiga/amigo</label>
            </div>
            <div>
              <input type="checkbox" id="sanitario" name="Cómo nos has conocido" value="A través de un profesional sanitario" className="mr-2" />
              <label htmlFor="sanitario">A través de un profesional sanitario</label>
            </div>
            <div>
              <input type="checkbox" id="redes" name="Cómo nos has conocido" value="A través de redes sociales" className="mr-2" />
              <label htmlFor="redes">A través de redes sociales</label>
            </div>
            <div>
              <input type="checkbox" id="otro" name="Cómo nos has conocido" value="Otro" className="mr-2" />
              <label htmlFor="otro">Otro</label>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" disabled={loading} className="mt-8 w-full bg-accent text-white font-semibold py-4 px-8 rounded-lg hover:bg-primary-hover transition-colors border-2 border-accent disabled:opacity-60">
        {loading ? "Enviando..." : "Enviar"}
      </button>
      {status === "success" && (
        <p className="text-green-600 text-center font-semibold mt-4">¡Tu mensaje fue enviado exitosamente!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center font-semibold mt-4">Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.</p>
      )}
    </form>
  );
} 