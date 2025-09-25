import { ArrowLeft, DollarSign, TrendingUp, TrendingDown, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Financeiro = () => {
  const navigate = useNavigate();

  const receitas = [
    {
      id: 1,
      cultura: "Soja",
      receita: "R$ 1.250.000,00",
      custo: "R$ 850.000,00",
      lucro: "R$ 400.000,00",
      margem: "32%",
      status: "positive"
    },
    {
      id: 2,
      cultura: "Milho",
      receita: "R$ 680.000,00",
      custo: "R$ 420.000,00",
      lucro: "R$ 260.000,00",
      margem: "38%",
      status: "positive"
    },
    {
      id: 3,
      cultura: "Bovinos",
      receita: "R$ 520.000,00",
      custo: "R$ 380.000,00",
      lucro: "R$ 140.000,00",
      margem: "27%",
      status: "positive"
    }
  ];

  const fluxoCaixa = [
    { mes: "Janeiro", entrada: 450000, saida: 280000, saldo: 170000 },
    { mes: "Fevereiro", entrada: 320000, saida: 240000, saldo: 80000 },
    { mes: "Março", entrada: 680000, saida: 420000, saldo: 260000 },
    { mes: "Abril", entrada: 550000, saida: 380000, saldo: 170000 }
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
              <DollarSign className="h-6 w-6 text-success-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Financeiro Rural</h1>
              <p className="text-muted-foreground">Receitas, custos e fluxo de caixa por cultura e safra</p>
            </div>
          </div>
        </div>

        {/* Métricas Financeiras */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-2 border-success/30 bg-gradient-to-br from-success/5 to-background">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-success mx-auto mb-2" />
              <h3 className="font-bold text-2xl text-foreground">R$ 2.1M</h3>
              <p className="text-sm text-muted-foreground">Receita Bruta</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-warning/30 bg-gradient-to-br from-warning/5 to-background">
            <CardContent className="p-6 text-center">
              <TrendingDown className="h-8 w-8 text-warning mx-auto mb-2" />
              <h3 className="font-bold text-2xl text-foreground">R$ 1.45M</h3>
              <p className="text-sm text-muted-foreground">Custos Totais</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-bold text-2xl text-foreground">R$ 650k</h3>
              <p className="text-sm text-muted-foreground">Lucro Líquido</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-background">
            <CardContent className="p-6 text-center">
              <PieChart className="h-8 w-8 text-accent-primary mx-auto mb-2" />
              <h3 className="font-bold text-2xl text-foreground">31%</h3>
              <p className="text-sm text-muted-foreground">Margem Líquida</p>
            </CardContent>
          </Card>
        </div>

        {/* Receitas por Cultura */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Receitas por Cultura</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {receitas.map((receita) => (
              <Card key={receita.id} className="border-2 transition-all duration-300 hover:scale-[1.01]">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-foreground">{receita.cultura}</CardTitle>
                    <Badge variant="default">
                      {receita.margem} Margem
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Receita Bruta:</span>
                      <span className="font-semibold text-success">{receita.receita}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Custos:</span>
                      <span className="font-semibold text-destructive">{receita.custo}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-muted-foreground font-semibold">Lucro Líquido:</span>
                      <span className="font-bold text-primary">{receita.lucro}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-primary">
                    Ver Detalhamento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fluxo de Caixa */}
        <Card className="border-2 border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground">Fluxo de Caixa - Últimos 4 Meses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Mês</th>
                    <th className="text-right py-3 px-4 font-semibold text-foreground">Entradas</th>
                    <th className="text-right py-3 px-4 font-semibold text-foreground">Saídas</th>
                    <th className="text-right py-3 px-4 font-semibold text-foreground">Saldo</th>
                  </tr>
                </thead>
                <tbody>
                  {fluxoCaixa.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-muted/30">
                      <td className="py-3 px-4 font-medium text-foreground">{item.mes}</td>
                      <td className="py-3 px-4 text-right font-semibold text-success">
                        R$ {(item.entrada / 1000).toFixed(0)}k
                      </td>
                      <td className="py-3 px-4 text-right font-semibold text-destructive">
                        R$ {(item.saida / 1000).toFixed(0)}k
                      </td>
                      <td className="py-3 px-4 text-right font-bold text-primary">
                        R$ {(item.saldo / 1000).toFixed(0)}k
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Financeiro;