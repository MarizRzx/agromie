import { ArrowLeft, CloudRain, Sun, Droplets, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Clima = () => {
  const navigate = useNavigate();

  const propriedades = [
    {
      id: 1,
      nome: "Fazenda São João",
      temperatura: "28°C",
      umidade: "65%",
      precipitacao: "12mm",
      status: "normal",
      alertas: 0
    },
    {
      id: 2,
      nome: "Sítio Esperança",
      temperatura: "31°C",
      umidade: "45%",
      precipitacao: "2mm",
      status: "seca",
      alertas: 2
    },
    {
      id: 3,
      nome: "Fazenda Progresso",
      temperatura: "26°C",
      umidade: "78%",
      precipitacao: "25mm",
      status: "ideal",
      alertas: 0
    }
  ];

  const previsao = [
    { dia: "Hoje", temp: "28°C", clima: "Parcialmente nublado", icon: CloudRain },
    { dia: "Amanhã", temp: "30°C", clima: "Ensolarado", icon: Sun },
    { dia: "Qua", temp: "29°C", clima: "Nublado", icon: CloudRain },
    { dia: "Qui", temp: "32°C", clima: "Ensolarado", icon: Sun },
    { dia: "Sex", temp: "27°C", clima: "Chuva leve", icon: CloudRain },
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
            <div className="w-12 h-12 bg-accent-primary rounded-xl flex items-center justify-center">
              <CloudRain className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Clima & Época de Seca</h1>
              <p className="text-muted-foreground">Monitoramento climático e gestão de recursos hídricos</p>
            </div>
          </div>
        </div>

        {/* Métricas Climáticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-background">
            <CardContent className="p-6 text-center">
              <CloudRain className="h-8 w-8 text-accent-primary mx-auto mb-2" />
              <h3 className="font-bold text-2xl text-foreground">45mm</h3>
              <p className="text-sm text-muted-foreground">Precipitação Mensal</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-warning/30 bg-gradient-to-br from-warning/5 to-background">
            <CardContent className="p-6 text-center">
              <Droplets className="h-8 w-8 text-warning mx-auto mb-2" />
              <h3 className="font-bold text-2xl text-foreground">68%</h3>
              <p className="text-sm text-muted-foreground">Reservatórios</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-6 text-center">
              <Sun className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-bold text-2xl text-foreground">29°C</h3>
              <p className="text-sm text-muted-foreground">Temperatura Média</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-success/30 bg-gradient-to-br from-success/5 to-background">
            <CardContent className="p-6 text-center">
              <Wind className="h-8 w-8 text-success mx-auto mb-2" />
              <h3 className="font-bold text-2xl text-foreground">62%</h3>
              <p className="text-sm text-muted-foreground">Umidade Média</p>
            </CardContent>
          </Card>
        </div>

        {/* Previsão do Tempo */}
        <Card className="border-2 border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground">Previsão de 5 Dias</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {previsao.map((item, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-muted/30">
                  <p className="font-semibold text-foreground">{item.dia}</p>
                  <item.icon className="h-8 w-8 text-primary mx-auto my-3" />
                  <p className="text-2xl font-bold text-foreground">{item.temp}</p>
                  <p className="text-sm text-muted-foreground">{item.clima}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Status por Propriedade */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Status das Propriedades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propriedades.map((prop) => (
              <Card key={prop.id} className="border-2 transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-foreground">{prop.nome}</CardTitle>
                    <Badge variant={
                      prop.status === "ideal" ? "default" :
                      prop.status === "seca" ? "destructive" : "secondary"
                    }>
                      {prop.status === "ideal" ? "Ideal" : 
                       prop.status === "seca" ? "Seca" : "Normal"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Temperatura:</span>
                      <p className="font-semibold text-foreground">{prop.temperatura}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Umidade:</span>
                      <p className="font-semibold text-foreground">{prop.umidade}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Chuva:</span>
                      <p className="font-semibold text-foreground">{prop.precipitacao}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Alertas:</span>
                      <p className="font-semibold text-foreground">{prop.alertas}</p>
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

export default Clima;