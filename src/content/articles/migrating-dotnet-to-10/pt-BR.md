No projeto atual, migramos a stack de **.NET 6 e .NET 7** para **.NET 10**. Não foi só trocar o `TargetFramework`: foi garantir suporte LTS, fechar gaps de segurança e aproveitar melhorias reais de runtime e tooling.

## Por que migrar agora

.NET 6 e .NET 7 já estão fora de suporte. Continuar neles significa ficar sem patches de segurança e sem correções oficiais. .NET 10 é LTS (suporte até 2028), então a janela de manutenção faz sentido para um produto que precisa de estabilidade.

## O que melhorou

- **Performance e GC**: o runtime 10 traz ganhos de JIT, menos alocações em caminhos quentes e menor footprint em vários cenários
- **JSON e libs**: `System.Text.Json` e APIs de networking/crypto mais maduras — menos dependência de pacotes extras
- **SDK e CI**: restore, testes e imagens de container mais previsíveis no pipeline
- **C# 14**: sintaxe mais enxuta em pontos do código que já pediam refactor

## Pontos que pediram atenção

1. **TFM e pacotes** — alinhamos `net10.0` em todos os projetos e atualizamos pacotes NuGet na mesma onda, evitando misturar major desatualizado com runtime novo.
2. **Hosting legado** — `WebHostBuilder` / `IWebHost` ficaram obsoletos; onde ainda existia o modelo antigo, migramos para `WebApplicationBuilder`.
3. **OpenAPI** — revisamos usos de `WithOpenApi()` e geradores antigos; parte da configuração de docs precisou ser refeita no padrão novo.
4. **Containers** — imagens oficiais passaram a base Ubuntu (antes Debian). Ajustamos Dockerfiles e dependências de SO no deploy.
5. **Restore e auditoria** — o `dotnet restore` audita transitivos por padrão; warnings tratados como erro no CI quebraram builds até limparmos vulnerabilidades reais.
6. **Testes e regressão** — rodamos a suíte completa e smoke nos fluxos críticos (auth, APIs, jobs). Migração sem regressão automatizada é chute.

## Como conduzimos

Fizemos a migração em etapas: primeiro SDK e TFM, depois pacotes, depois breaking changes de ASP.NET Core, e só então validação em ambiente próximo de produção. Assim o diff ficou legível e o rollback, se necessário, seria mais barato.

O resultado: codebase em LTS, dependências mais limpas e um pipeline que volta a refletir o que a Microsoft realmente suporte hoje.
