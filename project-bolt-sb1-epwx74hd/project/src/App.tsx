import React from 'react';
import { Network, Shield, Radio, Globe, Database, Server, Wifi, Code, Lock, Bug } from 'lucide-react';

function App() {
  const themes = [
    {
      title: "Réseaux et Infrastructure",
      icon: <Network className="w-8 h-8" />,
      color: "bg-blue-500",
      modules: [
        {
          name: "SAE102_RT",
          title: "S'initier aux réseaux informatiques",
          description: "Introduction aux concepts fondamentaux des réseaux informatiques, comprenant la configuration basique et la compréhension des protocoles réseau.",
          semester: 1
        },
        {
          name: "SAE201_RT",
          title: "Construire un réseau informatique pour une petite structure",
          description: "Conception et mise en place d'une infrastructure réseau adaptée aux besoins d'une petite organisation.",
          semester: 2
        },
        {
          name: "SAE303_RT",
          title: "Concevoir un réseau informatique sécurisé multi-sites",
          description: "Développement d'une architecture réseau complexe et sécurisée reliant plusieurs sites.",
          semester: 3
        }
      ]
    },
    {
      title: "Sécurité Informatique",
      icon: <Shield className="w-8 h-8" />,
      color: "bg-red-500",
      modules: [
        {
          name: "SAE101_RT",
          title: "Se sensibiliser à l'hygiène info et cybersécurité",
          description: "Apprentissage des bonnes pratiques en matière de sécurité informatique et sensibilisation aux enjeux de la cybersécurité.",
          semester: 1
        },
        {
          name: "SAE304_RT",
          title: "Découvrir le pentesting",
          description: "Introduction aux techniques de test de pénétration et d'audit de sécurité des systèmes informatiques.",
          semester: 3
        }
      ]
    },
    {
      title: "Transmission et Signal",
      icon: <Radio className="w-8 h-8" />,
      color: "bg-green-500",
      modules: [
        {
          name: "SAE103_RT",
          title: "Découvrir un dispositif de transmission",
          description: "Étude et manipulation des systèmes de transmission de données.",
          semester: 1
        },
        {
          name: "SAE202_RT",
          title: "Mesurer et caractériser un signal ou un système",
          description: "Analyse et caractérisation des signaux et systèmes de communication.",
          semester: 2
        },
        {
          name: "SAE301_RT",
          title: "Mettre en œuvre un système de transmission",
          description: "Implémentation pratique d'un système de transmission complet.",
          semester: 3
        }
      ]
    },
    {
      title: "Développement et Applications",
      icon: <Code className="w-8 h-8" />,
      color: "bg-purple-500",
      modules: [
        {
          name: "SAE104_RT",
          title: "Se présenter sur internet",
          description: "Création d'une présence en ligne professionnelle.",
          semester: 1
        },
        {
          name: "SAE203_RT",
          title: "Mettre en place une solution informatique pour l'entreprise",
          description: "Développement et déploiement de solutions informatiques adaptées aux besoins entreprise.",
          semester: 2
        },
        {
          name: "SAE302_RT",
          title: "Développer des applications communicantes",
          description: "Création d'applications avec fonctionnalités de communication réseau.",
          semester: 3
        }
      ]
    },
    {
      title: "Gestion de Données",
      icon: <Database className="w-8 h-8" />,
      color: "bg-yellow-500",
      modules: [
        {
          name: "SAE105_RT",
          title: "Traiter des données",
          description: "Introduction au traitement et à l'analyse des données.",
          semester: 1
        },
        {
          name: "SAE204_RT",
          title: "Projet intégratif",
          description: "Projet combinant différentes compétences acquises pour réaliser une solution complète.",
          semester: 2
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Portfolio BUT Réseau et Télécom
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            IUT Annecy Savoie Mont Blanc
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12">
          {themes.map((theme, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className={`${theme.color} p-6 flex items-center gap-4`}>
                <div className="bg-white p-3 rounded-full">
                  {theme.icon}
                </div>
                <h2 className="text-2xl font-bold text-white">{theme.title}</h2>
              </div>
              <div className="p-6">
                <div className="grid gap-6">
                  {theme.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="border-l-4 border-gray-200 pl-4 hover:border-blue-500 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                          Semestre {module.semester}
                        </span>
                        <h3 className="font-semibold text-lg text-gray-800">
                          {module.name}
                        </h3>
                      </div>
                      <h4 className="text-lg text-gray-700 mb-2">{module.title}</h4>
                      <p className="text-gray-600">{module.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 BUT Réseau et Télécom - IUT Annecy Savoie Mont Blanc</p>
        </div>
      </footer>
    </div>
  );
}

export default App;