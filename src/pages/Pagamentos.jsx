import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaCcVisa, FaPaypal, FaMobileAlt } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

const PaymentScreen = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pagamento processado!");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="shadow-2xl rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <MdPayment className="text-blue-600" /> Tela de Pagamento
          </h2>

          <Tabs defaultValue="card" className="w-full">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="card">
                <FaCcVisa className="inline mr-1" /> Cartão
              </TabsTrigger>
              <TabsTrigger value="mpesa">
                <FaMobileAlt className="inline mr-1" /> M-Pesa
              </TabsTrigger>
              <TabsTrigger value="mkesh">
                <FaMobileAlt className="inline mr-1" /> mKesh
              </TabsTrigger>
              <TabsTrigger value="paypal">
                <FaPaypal className="inline mr-1" /> PayPal
              </TabsTrigger>
            </TabsList>

            {/* Cartão */}
            <TabsContent value="card">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Número do Cartão"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  placeholder="Nome no Cartão"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Validade (MM/AA)"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                  />
                  <Input
                    type="password"
                    placeholder="CVV"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                  />
                </div>
                <Button type="submit" className="w-full">Pagar</Button>
              </form>
            </TabsContent>

            {/* M-Pesa */}
            <TabsContent value="mpesa">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Número M-Pesa"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                <Button type="submit" className="w-full">Pagar com M-Pesa</Button>
              </form>
            </TabsContent>

            {/* mKesh */}
            <TabsContent value="mkesh">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Número mKesh"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                <Button type="submit" className="w-full">Pagar com mKesh</Button>
              </form>
            </TabsContent>

            {/* PayPal */}
            <TabsContent value="paypal">
              <p className="mb-4 text-sm text-muted-foreground">
                Você será redirecionado para o PayPal para concluir o pagamento.
              </p>
              <Button className="w-full" onClick={() => alert("Redirecionando para PayPal...")}>Pagar com PayPal</Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentScreen;
