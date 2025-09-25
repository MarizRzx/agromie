import { ArrowLeft, Wheat, MapPin, Calendar, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Lavouras = () => {
  const navigate = useNavigate();

  const culturas = [
    {
      id: 1,
      nome: "Soja",
      area: "450 ha",
      fase: "Floração",
      produtividade: "92%",
      status: "success",
      dataPlantio: "15/10/2024",
      previsaoColheita: "20/02/2025"
    },
    {
      id: 2,
      nome: "Milho",
      area: "320 ha",
      fase: "Enchimento de Grãos",
      produtividade: "87%",
      status: "warning",
      dataPlantio: "20/09/2024",
      previsaoColheita: "15/01/2025"
    },
    {
      id: 3,
      nome: "Trigo",
      area: "280 ha",
      fase: "Germinação",
      produtividade: "95%",
      status: "success",
      dataPlantio: "05/11/2024",
      previsaoColheita: "10/03/2025"
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
            <div className="w-12 h-12 bg-success rounded-xl flex items-center justify-center">
              <Wheat className="h-6 w-6 text-success-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Gestão de Lavouras</h1>
              <p className="text-muted-foreground">Controle de plantio, crescimento e produtividade</p>
            </div>
          </div>
        </div>

        {/* Métricas Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-2 border-success/30 bg-gradient-to-br from-success/5 to-background">
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 text-success mx-auto mb-2" />
              <h3 className="font-bold text-2xl text-foreground">1.250 ha</h3>
              <p className="text-sm text-muted-foreground">Área Total Plantada</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-6 text-center">
              <Wheat className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-bold text-2xl text-foreground">8</h3>
              <p className="text-sm text-muted-foreground">Culturas Ativas</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-warning/30 bg-gradient-to-br from-warning/5 to-background">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-warning mx-auto mb-2" />
              <h3 className="font-bold text-2xl text-foreground">91.3%</h3>
              <p className="text-sm text-muted-foreground">Produtividade Média</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-background">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-accent-primary mx-auto mb-2" />
              <h3 className="font-bold text-2xl text-foreground">45</h3>
              <p className="text-sm text-muted-foreground">Dias até Colheita</p>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Culturas */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Culturas em Andamento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturas.map((cultura) => (
              <Card key={cultura.id} className="border-2 transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-foreground">{cultura.nome}</CardTitle>
                    <Badge variant={cultura.status === "success" ? "default" : "secondary"}>
                      {cultura.fase}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Área:</span>
                      <p className="font-semibold text-foreground">{cultura.area}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Produtividade:</span>
                      <p className="font-semibold text-foreground">{cultura.produtividade}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Plantio:</span>
                      <p className="font-semibold text-foreground">{cultura.dataPlantio}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Colheita:</span>
                      <p className="font-semibold text-foreground">{cultura.previsaoColheita}</p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-primary">
                    Ver Detalhes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lavouras;