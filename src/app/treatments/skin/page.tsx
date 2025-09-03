"use client"

import { TREATMENTS, TREATMENT_CATEGORIES } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Clock, Calendar, Star } from "lucide-react"
import Link from "next/link"

export default function SkinTreatmentsPage() {
  const skinTreatments = TREATMENTS.filter(treatment => treatment.category === 'skin')
  const categoryInfo = TREATMENT_CATEGORIES.find(cat => cat.id === 'skin')

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-white to-secondary">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-32 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {categoryInfo?.name}
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            {categoryInfo?.description}
          </p>
        </div>
      </div>

      {/* Treatments Grid */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-32 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skinTreatments.map((treatment) => (
            <Card key={treatment.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl text-primary group-hover:text-primary-dark transition-colors">
                  {treatment.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {treatment.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {treatment.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <Star className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Treatment Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span>{treatment.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span>{treatment.sessions}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex space-x-2">
                  <Button 
                    variant="primary" 
                    className="flex-1"
                    onClick={() => window.open(`tel:+917588832221`)}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Book Now
                  </Button>
                  <Link href={`/treatments/${treatment.id}`}>
                    <Button variant="outline" className="flex-1">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Back to All Treatments */}
        <div className="text-center mt-12">
          <Link href="/treatments">
            <Button variant="outline" size="lg">
              ← Back to All Treatments
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
