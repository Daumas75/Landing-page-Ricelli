import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ricelli Daumas - Planos de Saúde e Seguros",
  description:
    "Planos de Saúde, Odontológicos e Seguros com atendimento personalizado. Corretora especializada com as melhores operadoras do mercado.",
  keywords: "planos de saúde, seguro saúde, plano odontológico, corretora de seguros, Rio de Janeiro",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
