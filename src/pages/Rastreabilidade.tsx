import { ArrowLeft, QrCode, Package, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Rastreabilidade = () => {
  const navigate = useNavigate();

  const lotes = [
    {
      id: 1,
      codigo: "SOJ2024001",
      produto: "Soja Premium",
      qrCode: "QR001234",
      origem: "Fazenda São João - Talhão 15",
      dataPlantio: "15/10/2024",
      dataColheita: "20/02/2025",
      status: "rastreado",
      certificacoes: ["Orgânico", "Fair Trade"]
    },
    {
      id: 2,
      codigo: "MIL2024002",
      produto: "Milho Transgênico",
      qrCode: "QR001235",
      origem: "Fazenda Progresso - Talhão 8",
      dataPlantio: "20/09/2024",
      dataColheita: "15/01/2025",
      status: "processando",
      certificacoes: ["Rastreável"]
    },
    {
      id: 3,
      codigo: "BOV2024003",
      produto: "Carne Bovina Premium",
      qrCode: "QR001236",
      origem: "Fazenda Esperança - Pasto A",
      dataPlantio: "---",
      dataColheita: "---",
      status: "exportado",
      certificacoes: ["BPA", "SISBOV"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dashboard p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate('/')}
            className="shrink-0"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <QrCode className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Rastreabilidade</h1>
              <p className="text-muted-foreground">QR Codes e histórico completo da produção</p>
            </div>
          </div>
        </div>

        {/* Métricas de Rastreabilidade */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-6 text-center">
              <Package className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-bold text-2xl text-foreground">842</h3>
              <p className="text-sm text-muted-foreground">Lotes Rastreados</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-success/30 bg-gradient-to-br from-success/5 to-background">
            <CardContent className="p-6 text-center">
              <QrCode className="h-8 w-8 text-success mx-auto mb-2" />
              <h3 className="font-bold text-2xl text-foreground">1.205</h3>
              <p className="text-sm text-muted-foreground">QR Codes Ativos</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-background">
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 text-accent-primary mx-auto mb-2" />
              <h3 className="font-bold text-2xl text-foreground">100%</h3>
              <p className="text-sm text-muted-foreground">Certificações</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-warning/30 bg-gradient-to-br from-warning/5 to-background">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-warning mx-auto mb-2" />
              <h3 className="font-bold text-2xl text-foreground">365</h3>
              <p className="text-sm text-muted-foreground">Dias de Histórico</p>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Lotes Rastreados */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Lotes em Rastreamento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lotes.map((lote) => (
              <Card key={lote.id} className="border-2 transition-all duration-300 hover:scale-[1.01]">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-bold text-foreground">{lote.codigo}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{lote.produto}</p>
                    </div>
                    <Badge variant={
                      lote.status === "rastreado" ? "default" :
                      lote.status === "processando" ? "secondary" : "outline"
                    }>
                      {lote.status === "rastreado" ? "Rastreado" :
                       lote.status === "processando" ? "Processando" : "Exportado"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">QR Code:</span>
                      <span className="font-semibold text-foreground">{lote.qrCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Origem:</span>
                      <span className="font-semibold text-foreground text-right max-w-[60%]">{lote.origem}</span>
                    </div>
                    {lote.dataPlantio !== "---" && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Plantio:</span>
                          <span className="font-semibold text-foreground">{lote.dataPlantio}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Colheita:</span>
                          <span className="font-semibold text-foreground">{lote.dataColheita}</span>
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Certificações:</p>
                    <div className="flex flex-wrap gap-2">
                      {lote.certificacoes.map((cert, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-primary">
                      Ver QR Code
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Histórico
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rastreabilidade;