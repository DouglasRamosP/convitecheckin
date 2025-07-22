import { useEffect, useState } from "react";

export default function Admin() {
  const [countdown, setCountdown] = useState("");

  // Simulados (depois conecta no backend)
  const totalConvidados = 120;
  const confirmados = 85;
  const padrinhos = 10;
  const pages = 4;

  // Contagem regressiva
  useEffect(() => {
    const targetDate = new Date("2027-08-27");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      setCountdown(days > 0 ? `${days} dias` : "Hoje é o dia!");
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex">
      {/* Coluna lateral esquerda com 2x2 */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 grid grid-cols-2 gap-4">
        <Widget title="Total Convidados" value={totalConvidados} />
        <Widget title="Confirmados" value={confirmados} />
        <Widget title="Padrinhos / Pajes" value={`${padrinhos} / ${pages}`} />
        <Widget title="Contagem Regressiva" value={countdown} />
      </div>

      {/* Área central do painel */}
      <div className="flex-1 ml-64 p-4">
        <h1 className="text-2xl font-bold mb-4"></h1>
        {/* Conteúdo principal aqui */}
      </div>
    </div>
  );
}

function Widget({ title, value }) {
  return (
    <div className="bg-mossGlass backdrop-blur-md p-4 rounded-lg shadow-lg text-center border border-mossBorder w-40">
      <h2 className="text-mossVeryDark font-bold mb-2">{title}</h2>
      <p className="text-2xl font-wedding text-mossVeryDark">{value}</p>
    </div>
  );
}
