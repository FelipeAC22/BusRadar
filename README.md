# 🚌 Rastreamento de Ônibus

Este é o repositório para o projeto BusRadar!

---

## ✨ Funções a serem adicionadas:

- **Mapa em tempo real:** veículos, rotas e paradas visualizadas de forma clara
- **ETA inteligente:** previsões de chegada com base em telemetria
- **Alertas de proximidade:** notificações para suas paradas favoritas

---

## 🎬 Banner animado (inline SVG)

<p align="center">
  <svg width="880" height="140" viewBox="0 0 880 140" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stop-color="#3b82f6"/>
        <stop offset="100%" stop-color="#22c55e"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="880" height="140" fill="url(#g)" opacity="0.12"/>
    <text x="30" y="56" fill="#0f172a" font-family="Inter, system-ui" font-size="28" font-weight="700">
      Rastreamento de Ônibus — Mapa, ETA e Alertas
    </text>
    <text x="30" y="92" fill="#334155" font-family="Inter, system-ui" font-size="16">
      Demonstração visual com elementos animados dentro do próprio README
    </text>

    <!-- Linha de pista -->
    <rect x="30" y="110" width="820" height="6" fill="#e5e7eb"/>
    <!-- Ônibus -->
    <g id="bus">
      <rect x="32" y="94" width="54" height="24" rx="4" fill="#3b82f6"/>
      <rect x="40" y="99" width="38" height="8" fill="#bfdbfe"/>
      <circle cx="48" cy="118" r="4" fill="#0f172a"/>
      <circle cx="70" cy="118" r="4" fill="#0f172a"/>
    </g>
    <animate href="#bus" attributeName="transform" type="translate"
             values="0 0; 760 0; 0 0" dur="7s" repeatCount="indefinite"/>
  </svg>
</p>

---

## 🎯 Objetivo do projeto

Entregar previsibilidade e transparência ao transporte público: reduzir tempo de espera, informar mudanças de itinerário e aproximar passageiros de dados em tempo real.

---

## 🗺️ Visual de status (inline SVG)

<p align="center">
  <svg width="520" height="90" viewBox="0 0 520 90" xmlns="http://www.w3.org/2000/svg">
    <!-- Badges simples -->
    <g font-family="Inter, system-ui" font-size="14">
      <rect x="20" y="20" width="130" height="32" rx="6" fill="#f1f5f9"/>
      <text x="35" y="40" fill="#0f172a">Mapa: Ativo</text>
      <circle cx="130" cy="36" r="6" fill="#22c55e"/>

      <rect x="170" y="20" width="160" height="32" rx="6" fill="#f1f5f9"/>
      <text x="185" y="40" fill="#0f172a">ETA média: 420ms</text>
      <circle cx="315" cy="36" r="6" fill="#3b82f6"/>

      <rect x="350" y="20" width="150" height="32" rx="6" fill="#f1f5f9"/>
      <text x="365" y="40" fill="#0f172a">Alertas: On</text>
      <circle cx="470" cy="36" r="6" fill="#f59e0b"/>
    </g>

    <!-- Pulso de GPS -->
    <circle cx="260" cy="68" r="5" fill="#22c55e"/>
    <circle cx="260" cy="68" r="5" fill="none" stroke="#22c55e" stroke-width="2" opacity="0.8">
      <animate attributeName="r" values="5;18;5" dur="2.2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.9;0;0.9" dur="2.2s" repeatCount="indefinite"/>
    </circle>
    <text x="280" y="72" fill="#334155" font-family="Inter, system-ui" font-size="12">GPS pulsing</text>
  </svg>
</p>

---