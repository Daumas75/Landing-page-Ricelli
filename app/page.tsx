"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Mail, Shield, Users, CheckCircle, Star, Menu, X, Instagram, Facebook } from "lucide-react"
import { LogoCarousel } from "@/components/logo-carousel" // Import the new component
import { TypingAnimation } from "@/components/typing-animation" // Import TypingAnimation

export default function RicelliLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false) // Declare the isSubmitted variable

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create separate date and time fields
      const now = new Date()
      const date = now.toLocaleDateString("pt-BR", {
        timeZone: "America/Sao_Paulo",
      })
      const time = now.toLocaleTimeString("pt-BR", {
        timeZone: "America/Sao_Paulo",
      })

      // Send data to Google Sheets via SheetMonkey API
      const response = await fetch("https://api.sheetmonkey.io/form/trm14nqzGdpvB3WYDKhjSk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: formData.nome,
          telefone: formData.telefone,
          email: formData.email,
          data: date,
          hora: time,
        }),
      })

      if (response.ok) {
        // Show success message
        setIsSubmitting(false)
        setIsSubmitted(true)

        // Wait 5 seconds then return to form
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({ nome: "", telefone: "", email: "" })
        }, 5000)
      } else {
        throw new Error("Erro ao enviar formulário")
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error)
      setIsSubmitting(false)
      // You could add error handling here if needed
    }
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const whatsappUrl = `https://wa.me/5521994878791?text=Olá! Gostaria de saber mais sobre os planos de saúde e seguros.`

  const operatorLogos = [
    { src: "/images/notredame.jpeg", alt: "NotreDame Intermédica" },
    { src: "/images/porto.jpeg", alt: "Porto Seguro Saúde" },
    { src: "/images/quali-corp.jpeg", alt: "Qualicorp" },
    { src: "/images/unimed.jpeg", alt: "Unimed Seguros" },
    { src: "/images/sulamerica.jpeg", alt: "SulAmérica Saúde" },
    { src: "/images/odontoprev.jpeg", alt: "Odontoprev" },
    { src: "/images/bradesco.jpeg", alt: "Bradesco Saúde" },
    { src: "/images/assim.jpeg", alt: "Assim Saúde" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/images/ricelli-daumas-logo-rd.png"
                alt="RD - Ricelli Daumas Corretora de Seguros"
                className="h-14 w-auto object-contain cursor-pointer transition-all duration-300 hover:scale-110 hover:brightness-110 hover:drop-shadow-lg"
                onClick={() => scrollToSection("hero")}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-slate-600 hover:text-teal-600 transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-600 hover:text-teal-600 transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("operators")}
                className="text-slate-600 hover:text-teal-600 transition-colors"
              >
                Operadoras
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-slate-600 hover:text-teal-600 transition-colors"
              >
                Planos
              </button>
              <button
                onClick={() => scrollToSection("differentials")}
                className="text-slate-600 hover:text-teal-600 transition-colors"
              >
                Diferenciais
              </button>
            </nav>

            {/* WhatsApp Button */}
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => window.open(whatsappUrl, "_blank")}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl px-5 py-2 flex items-center space-x-2 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <img src="/images/whatsapp-logo.png" alt="WhatsApp" className="w-5 h-5" />
                <span className="hidden sm:inline">WhatsApp</span>
              </Button>

              {/* Mobile Menu Button */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-left text-slate-600 hover:text-teal-600 transition-colors"
                >
                  Início
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-slate-600 hover:text-teal-600 transition-colors"
                >
                  Sobre
                </button>
                <button
                  onClick={() => scrollToSection("operators")}
                  className="text-left text-slate-600 hover:text-teal-600 transition-colors"
                >
                  Operadoras
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-left text-slate-600 hover:text-teal-600 transition-colors"
                >
                  Planos
                </button>
                <button
                  onClick={() => scrollToSection("differentials")}
                  className="text-left text-slate-600 hover:text-teal-600 transition-colors"
                >
                  Diferenciais
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 relative bg-gradient-to-br from-blue-50 to-teal-50">
        {/* Foreground image as a subtle overlay */}
        <img
          src="/images/hero-background-pattern.jpeg"
          alt="Padrão de ícones de saúde e seguros"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-[70vh]">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Sua Saúde e Segurança <br />
              <TypingAnimation text="Começam Aqui!" />
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Planos de Saúde, Odontológicos e Seguros com atendimento personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => window.open(whatsappUrl, "_blank")}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-5 py-2.5 text-sm rounded-2xl flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img src="/images/whatsapp-logo.png" alt="WhatsApp" className="w-6 h-6" />
                <span>Fale no WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Quem é Ricelli Daumas?</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src="/images/ricelli-daumas-profile-2.png"
                  alt="Ricelli Daumas"
                  className="max-w-[260px] h-auto rounded-2xl shadow-xl" // Changed shadow to shadow-xl
                />
              </div>
              <div className="space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Olá! Sou Ricelli Daumas, especialista em encontrar o plano de saúde, odontológico ou seguro ideal para
                  as suas necessidades. Com anos de experiência no mercado e atuando pela{" "}
                  <a
                    href="https://jcluz.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-teal-600 hover:underline"
                  >
                    JC LUZ CORRETORA DE SEGUROS
                  </a>
                  , minha missão é oferecer um atendimento humano, transparente e totalmente focado em garantir sua
                  tranquilidade.
                </p>
                <div className="flex items-center space-x-2 text-teal-600">
                  <Mail size={20} />
                  <span>ricellidaumascs@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operators Section */}
      <section id="operators" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Operadoras Parceiras</h2>
            {/* Use the new LogoCarousel component here */}
            <LogoCarousel logos={operatorLogos} />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">
              Planos com preços especiais!
            </h2>
            <p className="text-xl text-center text-slate-600 mb-12">Encontre o plano ideal para você e sua família</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
              {/* Plan 1 */}
              <Card className="relative hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-teal-50 border-0 shadow-xl rounded-3xl overflow-hidden flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-600"></div>
                <CardHeader className="text-center pb-4">
                  <Badge className="w-fit mx-auto mb-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white border-0 rounded-full px-4 py-1">
                    Mais Popular
                  </Badge>
                  <CardTitle className="text-2xl font-bold text-slate-800">Assim A20 </CardTitle>
                  <CardDescription className="text-slate-600">Cobertura regional </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between h-full space-y-4">
                  <div className="text-center">
                    <span className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                      R$ 209
                    </span>
                    <span className="text-slate-600">/mês</span>
                  </div>
                  <ul className="space-y-3 flex-grow">
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-slate-700">Consultas </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-slate-700">Exames laboratoriais</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-slate-700">Internações</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-slate-700">Cirurgias</span>
                    </li>
                  </ul>
                  <Button
                    onClick={() => window.open(whatsappUrl, "_blank")}
                    className="w-fit mx-auto bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white py-1.5 px-4 text-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Quero esse plano
                  </Button>
                </CardContent>
              </Card>

              {/* Plan 2 */}
              <Card className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-blue-50 border-0 shadow-xl rounded-3xl overflow-hidden flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-slate-800">Porto Seguro P220 </CardTitle>
                  <CardDescription className="text-slate-600">Cobertura Nacional </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between h-full space-y-4">
                  <div className="text-center">
                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                      R$ 384,35
                    </span>
                    <span className="text-slate-600">/mês</span>
                  </div>
                  <ul className="space-y-3 flex-grow">
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-slate-700">Consultas</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-slate-700">{"Exames laboratoriais"}</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-slate-700">Internações</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-slate-700">Cirurgias</span>
                    </li>
                  </ul>
                  <Button
                    onClick={() => window.open(whatsappUrl, "_blank")}
                    className="w-fit mx-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-1.5 px-4 text-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Quero esse plano
                  </Button>
                </CardContent>
              </Card>

              {/* Plan 3 */}
              <Card className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-purple-50 border-0 shadow-xl rounded-3xl overflow-hidden flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-slate-800">Bradesco Nacional Flex </CardTitle>
                  <CardDescription className="text-slate-600">Cobertura Nacional</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between h-full space-y-4">
                  <div className="text-center">
                    <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                      R$ 859
                    </span>
                    <span className="text-slate-600">/vida</span>
                  </div>
                  <ul className="space-y-3 flex-grow">
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-slate-700">A partir de 3 vidas </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-slate-700">{"Rede Dor"}</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-slate-700">Internações</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-slate-700">Odontológico incluso </span>
                    </li>
                  </ul>
                  <Button
                    onClick={() => window.open(whatsappUrl, "_blank")}
                    className="w-fit mx-auto bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-1.5 px-4 text-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Quero esse plano
                  </Button>
                </CardContent>
              </Card>

              {/* New Plan 4: Plano Empresarial */}
              <Card className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-orange-50 border-0 shadow-xl rounded-3xl overflow-hidden flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-slate-800">Amil Bronze </CardTitle>
                  <CardDescription className="text-slate-600">Grupo de Municípios </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between h-full space-y-4 py-0">
                  <div className="text-center">
                    <span className="font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent text-3xl border-0">
                      R$ 240,46
                    </span>
                    <span className="text-slate-600">/mês</span>
                  </div>
                  <ul className="space-y-3 flex-grow">
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-slate-700">Consultas </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-slate-700">{"Exames laboratoriais"}</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-slate-700">Internações</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-slate-700">{"Cirurgias"}</span>
                    </li>
                  </ul>
                  <Button
                    onClick={() => window.open(whatsappUrl, "_blank")}
                    className="w-fit mx-auto bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white py-1.5 px-4 text-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Quero esse plano
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="differentials" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
              Por que escolher meus serviços?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg rounded-3xl">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-teal-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="text-teal-600" size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Atendimento personalizado</h3>
                <p className="text-slate-600 leading-relaxed max-w-md mx-auto md:mx-0">
                  Cada cliente é único. Analiso seu perfil para encontrar o plano ideal.
                </p>
              </Card>

              <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg rounded-3xl">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <img src="/images/whatsapp-logo.png" alt="WhatsApp" className="w-9 h-9" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Resposta rápida via WhatsApp</h3>
                <p className="text-slate-600 leading-relaxed">
                  Estou sempre disponível para esclarecer suas dúvidas rapidamente.
                </p>
              </Card>

              <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg rounded-3xl">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Star className="text-blue-600" size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Trabalho com as melhores operadoras</h3>
                <p className="text-slate-600 leading-relaxed">
                  Parceria com as principais operadoras do mercado brasileiro.
                </p>
              </Card>

              <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg rounded-3xl">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="text-purple-600" size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Suporte completo</h3>
                <p className="text-slate-600 leading-relaxed">Acompanho você antes, durante e depois da contratação.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Perguntas Frequentes</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-0">
                <Card className="shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white border border-slate-100">
                  <AccordionTrigger className="text-left px-6 py-4 hover:no-underline group transition-all duration-300 font-semibold text-slate-800 text-lg hover:bg-gradient-to-r hover:from-teal-50 hover:via-teal-25 hover:to-blue-50 [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-teal-50 [&[data-state=open]]:via-teal-25 [&[data-state=open]]:to-blue-50 rounded-t-3xl">
                    <span className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <span className="group-hover:text-teal-700 transition-colors duration-300">
                        Como funciona a contratação de um plano de saúde?
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-slate-600 leading-relaxed text-base bg-gradient-to-br from-white to-slate-25">
                    <div className="pt-2 border-t border-slate-100">
                      O processo é simples: primeiro fazemos uma análise do seu perfil e necessidades, depois apresento
                      as melhores opções disponíveis. Após sua escolha, cuido de toda a documentação e processo de
                      contratação.
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-0">
                <Card className="shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white border border-slate-100">
                  <AccordionTrigger className="text-left px-6 py-4 hover:no-underline group transition-all duration-300 font-semibold text-slate-800 text-lg hover:bg-gradient-to-r hover:from-blue-50 hover:via-blue-25 hover:to-purple-50 [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-blue-50 [&[data-state=open]]:via-blue-25 [&[data-state=open]]:to-purple-50 rounded-t-3xl">
                    <span className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <span className="group-hover:text-blue-700 transition-colors duration-300">
                        Posso incluir minha família no mesmo plano?
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-slate-600 leading-relaxed text-base bg-gradient-to-br from-white to-slate-25">
                    <div className="pt-2 border-t border-slate-100">
                      Sim! A maioria dos planos permite a inclusão de dependentes (cônjuge, filhos, pais). Isso
                      geralmente resulta em economia comparado a planos individuais separados.
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-0">
                <Card className="shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white border border-slate-100">
                  <AccordionTrigger className="text-left px-6 py-4 hover:no-underline group transition-all duration-300 font-semibold text-slate-800 text-lg hover:bg-gradient-to-r hover:from-purple-50 hover:via-purple-25 hover:to-pink-50 [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-purple-50 [&[data-state=open]]:via-purple-25 [&[data-state=open]]:to-pink-50 rounded-t-3xl">
                    <span className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <span className="group-hover:text-purple-700 transition-colors duration-300">
                        Existe carência para usar o plano?
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-slate-600 leading-relaxed text-base bg-gradient-to-br from-white to-slate-25">
                    <div className="pt-2 border-t border-slate-100">
                      Sim, existe carência para alguns procedimentos. Urgência e emergência têm carência de 24h,
                      consultas e exames simples 30 dias, e procedimentos mais complexos podem ter carências maiores.
                      Explico tudo detalhadamente.
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-0">
                <Card className="shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white border border-slate-100">
                  <AccordionTrigger className="text-left px-6 py-4 hover:no-underline group transition-all duration-300 font-semibold text-slate-800 text-lg hover:bg-gradient-to-r hover:from-orange-50 hover:via-orange-25 hover:to-yellow-50 [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-orange-50 [&[data-state=open]]:via-orange-25 [&[data-state=open]]:to-yellow-50 rounded-t-3xl">
                    <span className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <span className="group-hover:text-orange-700 transition-colors duration-300">
                        Posso trocar de plano depois de contratado?
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-slate-600 leading-relaxed text-base bg-gradient-to-br from-white to-slate-25">
                    <div className="pt-2 border-t border-slate-100">
                      Sim, é possível fazer upgrade ou mudança de plano. Algumas operadoras permitem mudanças sem nova
                      carência. Analiso sempre a melhor estratégia para cada caso.
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-0">
                <Card className="shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white border border-slate-100">
                  <AccordionTrigger className="text-left px-6 py-4 hover:no-underline group transition-all duration-300 font-semibold text-slate-800 text-lg hover:bg-gradient-to-r hover:from-green-50 hover:via-green-25 hover:to-teal-50 [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-green-50 [&[data-state=open]]:via-green-25 [&[data-state=open]]:to-teal-50 rounded-t-3xl">
                    <span className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-sm">5</span>
                      </div>
                      <span className="group-hover:text-green-700 transition-colors duration-300">
                        O que está incluído no plano odontológico?
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-slate-600 leading-relaxed text-base bg-gradient-to-br from-white to-slate-25">
                    <div className="pt-2 border-t border-slate-100">
                      Os planos odontológicos geralmente incluem consultas, limpeza, restaurações, extrações e
                      tratamentos básicos. Procedimentos estéticos e ortodontia podem ter cobertura parcial ou não estar
                      inclusos.
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              {/* Branding/About */}
              <div className="md:col-span-2">
                <div className="flex justify-center md:justify-start items-center space-x-6 mb-6">
                  <img
                    src="/images/seguros-logo.png"
                    alt="Seguros - Corretora de Seguros"
                    className="h-24 w-auto object-contain"
                  />
                  <a
                    href="https://jcluz.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 hover:scale-105 hover:opacity-80"
                  >
                    <img
                      src="/images/jc-luz-logo-clean.png"
                      alt="JC Luz - Corretora de Seguros"
                      className="h-24 w-auto object-contain"
                    />
                  </a>
                </div>
                <p className="text-slate-300 text-base leading-relaxed max-w-md mx-auto md:mx-0">
                  Corretoras especializadas em planos de saúde, odontológicos e seguros, oferecendo atendimento
                  personalizado e as melhores soluções para você e sua família.
                </p>
              </div>

              {/* Contact Info */}
              <div className="text-center md:text-left">
                <h4 className="text-xl font-semibold mb-6 text-white">Contato</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center md:justify-start space-x-3 text-green-400 hover:text-green-300 transition-colors group"
                    >
                      <img
                        src="/images/whatsapp-logo.png"
                        alt="WhatsApp"
                        className="w-6 h-6 group-hover:scale-110 transition-transform"
                      />
                      <span className="text-base">(21) 99487-8791</span>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center justify-center md:justify-start space-x-3 text-slate-300">
                      <Mail size={20} />
                      <span className="text-base">ricellidaumascs@gmail.com</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="text-center md:text-left">
                <h4 className="text-xl font-semibold mb-6 text-white">Conecte-se</h4>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a
                    href="https://www.instagram.com/ricelli_daumas?igsh=Y2tpeDc4ZTd5MW1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61578045524220"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-slate-400 text-sm">
                  © {new Date().getFullYear()} Ricelli Daumas. Todos os direitos reservados.
                </p>
                <div className="flex space-x-6">
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Política de Privacidade
                  </a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Termos de Uso
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
