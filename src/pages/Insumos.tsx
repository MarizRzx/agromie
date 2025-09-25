import { ArrowLeft, Package, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Insumos = () => {
  const navigate = useNavigate();

  const insumos = [
    {
      id: 1,
      nome: "Fertilizante NPK 20-05-20",
      categoria: "Fertilizante",
      quantidade: "500 kg",
      valorTotal: "R$ 2.150,00",
      validade: "15/08/2025",
      status: "estoque",
      fornecedor: "Agro Fertilizantes Ltda"
    },
    {
      id: 2,
      nome: "Semente de Soja Transgênica",
      categoria: "Semente",
      quantidade: "45 sacas",
      valorTotal: "R$ 18.900,00",
      validade: "30/03/2025",
      status: "vencendo",
      fornecedor: "Sementes Brasil S.A."
    },
    {
      id: 3,
      nome: "Vacina Contra Febre Aftosa",
      categoria: "Veterinário",
      quantidade: "200 doses",
      valorTotal: "R$ 1.080,00",
      validade: "10/02/2025",
      status: "critico",
      fornecedor: "VetSaúde Ltda"
    },
    {
      id: 4,
      nome: "Herbicida Glifosato",
      categoria: "Defensivo",
      quantidade: "80 L",
      valorTotal: "R$ 3.200,00",
      validade: "22/12/2025",
      status: "estoque",
      fornecedor: "Defensivos Agro"
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
              <Package className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Insumos & Estoque</h1>
              <p className="text-muted-foreground">Controle de fertilizantes, sementes e produtos veterinários</p>
            </div>
          </div>
        </div>

        {/* Métricas Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-6 text-center">
              <Package className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-bold text-2xl text-foreground">156</h3>
              <p className="text-sm text-muted-foreground">Itens em Estoque</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-success/30 bg-gradient-to-br from-success/5 to-background">
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-8 w-8 text-success mx-auto mb-2" />
              <h3 className="font-bold text-2xl text-foreground">R$ 89.5k</h3>
              <p className="text-sm text-muted-foreground">Valor Total</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-warning/30 bg-gradient-to-br from-warning/5 to-background">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-warning mx-auto mb-2" />
              <h3 className="font-bold text-2xl text-foreground">8</h3>
              <p className="text-sm text-muted-foreground">Itens Vencendo</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-destructive/30 bg-gradient-to-br from-destructive/5 to-background">
            <CardContent className="p-6 text-center">
              <AlertTriangle className="h-8 w-8 text-destructive mx-auto mb-2" />
              <h3 className="font-bold text-2xl text-foreground">3</h3>
              <p className="text-sm text-muted-foreground">Estoque Crítico</p>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Insumos */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Inventário de Insumos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insumos.map((insumo) => (
              <Card key={insumo.id} className="border-2 transition-all duration-300 hover:scale-[1.01]">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-bold text-foreground">{insumo.nome}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{insumo.categoria}</p>
                    </div>
                    <Badge variant={
                      insumo.status === "estoque" ? "default" :
                      insumo.status === "vencendo" ? "secondary" : "destructive"
                    }>
                      {insumo.status === "estoque" ? "Em Estoque" :
                       insumo.status === "vencendo" ? "Vencendo" : "Crítico"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Quantidade:</span>
                      <p className="font-semibold text-foreground">{insumo.quantidade}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Valor Total:</span>
                      <p className="font-semibold text-foreground">{insumo.valorTotal}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Validade:</span>
                      <p className="font-semibold text-foreground">{insumo.validade}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="text-muted-foreground">Fornecedor:</span>
                      <p className="font-semibold text-foreground">{insumo.fornecedor}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-primary">
                      Editar
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

export default Insumos;