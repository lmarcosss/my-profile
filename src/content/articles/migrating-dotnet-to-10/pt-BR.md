No projeto atual, migramos a stack de **.NET 6**, **.NET 7** e **.NET 8** para **.NET 10** nos diferentes projetos.

Essa migração não foi apenas uma alteração no `TargetFramework`: também tivemos que revisar dependências, configurações de build, versionamento de APIs, containers e problemas de compatibilidade introduzidos pelo novo runtime.

## Por que migrar agora

O .NET 6 e o .NET 7 já estão fora de suporte, enquanto o .NET 10 é uma versão LTS, oferecendo uma janela maior de suporte, manutenção e segurança.

Embora o .NET 8 ainda estivesse em suporte, migrar esses projetos para o .NET 10 nos permitiu padronizar a solução em uma única versão de runtime, evitando a manutenção de diferentes versões do framework entre os projetos.

## O que foi alterado

### Target Framework e SDK

Migramos todos os projetos dos seus respectivos frameworks anteriores:

- .NET 6 → .NET 10
- .NET 7 → .NET 10
- .NET 8 → .NET 10

Os projetos passaram a utilizar o .NET SDK **10.0.201**.

Isso nos permitiu ter um target de runtime consistente em toda a solução e reduzir a necessidade de manter configurações específicas para diferentes versões do framework.

### Dependências e pacotes

Revisamos e atualizamos as dependências NuGet para garantir compatibilidade com o .NET 10.

Durante a migração, também identificamos e corrigimos problemas de dependência, incluindo uma dependência circular entre projetos.

Além disso, o processo de atualização ajudou a identificar dependências que precisam de uma análise futura devido a mudanças de suporte ou de versão.

### API Versioning

Como parte da atualização do ASP.NET Core, identificamos a necessidade de migrar da biblioteca antiga:

`Microsoft.AspNetCore.Mvc.Versioning`

para:

`Asp.Versioning.Mvc`

Essa mudança exige alguns ajustes na configuração e no código porque a biblioteca de versionamento utilizada nas versões mais antigas do ASP.NET Core foi substituída por uma abordagem mais atual.

### Docker e containers

Também revisamos a configuração dos builds Docker e as dependências relacionadas ao sistema operacional.

Durante o processo, encontramos problemas relacionados aos repositórios e pacotes utilizados nos containers, incluindo:

- `tzdata`
- `curl`

Esses problemas exigiram ajustes na configuração dos containers e no processo de build.

### AWS SDK

Durante a revisão das dependências, também identificamos questões relacionadas ao ciclo de suporte do AWS SDK for .NET V3.

Como essa é uma mudança maior e independente da atualização do framework, decidimos tratá-la separadamente, primeiro avaliando seu impacto antes de realizar uma atualização mais ampla.

### Restore e build

Após as alterações de framework e dependências, validamos os projetos utilizando `dotnet restore` e o processo de build com o .NET 10.

O restore foi concluído com sucesso, embora alguns warnings relacionados às dependências do AWS SDK tenham sido identificados e analisados separadamente.

## Pontos de atenção

A migração exigiu mais do que simplesmente alterar o `TargetFramework`, pois a atualização do runtime também expôs questões de compatibilidade em diferentes partes da solução.

Os principais pontos analisados foram:

- Migração de .NET 6, .NET 7 e .NET 8 para .NET 10
- Compatibilidade dos projetos e pacotes com `net10.0`
- Dependências circulares entre projetos
- Alterações no ASP.NET Core API Versioning
- Compatibilidade das imagens Docker e dos pacotes do sistema operacional
- Versão e ciclo de suporte do AWS SDK
- Comportamento do build e do restore com o novo SDK
- Separação de mudanças maiores e independentes da migração principal

## Como executamos a migração

A migração foi realizada em etapas:

1. Atualização do SDK e Target Framework
2. Atualização das dependências e pacotes
3. Correção dos problemas de compatibilidade
4. Ajustes nos containers
5. Validação do build e restore
6. Validação nos ambientes

Os projetos foram migrados diretamente de suas respectivas versões .NET 6, .NET 7 ou .NET 8 para .NET 10, permitindo padronizar a solução em uma única versão do framework.

Quando identificamos mudanças que estavam fora do escopo principal da migração, como uma atualização maior do AWS SDK, elas foram separadas para serem avaliadas posteriormente, evitando aumentar desnecessariamente o escopo da atualização.

## Resultado

A solução agora está padronizada em .NET 10, substituindo os projetos que anteriormente utilizavam .NET 6, .NET 7 e .NET 8.

Durante o processo, nós:

- Migramos todos os projetos para `net10.0`
- Padronizamos o ambiente de build no .NET SDK 10.0.201
- Atualizamos as dependências necessárias
- Resolvemos problemas de dependência
- Corrigimos problemas relacionados aos builds Docker
- Identificamos as alterações necessárias no API Versioning
- Avaliamos o impacto de dependências com mudanças de ciclo de suporte
- Validamos os builds e restores utilizando o novo SDK

Com isso, conseguimos padronizar a solução em um único runtime LTS suportado, mantendo a migração focada e deixando mudanças maiores e independentes para trabalhos futuros.
