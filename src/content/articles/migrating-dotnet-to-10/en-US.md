On our current project, we migrated the stack from **.NET 6 and .NET 7** to **.NET 10**. It was not just a `TargetFramework` bump: we needed LTS support, security coverage, and real runtime and tooling gains.

## Why migrate now

.NET 6 and .NET 7 are already out of support. Staying there means no security patches and no official fixes. .NET 10 is LTS (supported through 2028), so the maintenance window fits a product that needs stability.

## What improved

- **Performance and GC**: the .NET 10 runtime brings JIT wins, fewer allocations on hot paths, and a smaller footprint in several workloads
- **JSON and libraries**: more mature `System.Text.Json` plus networking/crypto APIs — fewer extra packages
- **SDK and CI**: more predictable restore, tests, and container images in the pipeline
- **C# 14**: tighter syntax in places that already needed a cleanup

## What we paid attention to

1. **TFMs and packages** — we aligned every project on `net10.0` and bumped NuGet packages in the same pass, avoiding a mix of stale majors on a new runtime.
2. **Legacy hosting** — `WebHostBuilder` / `IWebHost` are obsolete; wherever the old model remained, we moved to `WebApplicationBuilder`.
3. **OpenAPI** — we reviewed `WithOpenApi()` usage and older generators; part of the docs setup had to be redone on the new path.
4. **Containers** — official images now default to Ubuntu (previously Debian). We adjusted Dockerfiles and OS-level deps in deploy.
5. **Restore and auditing** — `dotnet restore` audits transitive packages by default; warnings-as-errors in CI failed builds until we cleared real vulnerabilities.
6. **Tests and regression** — we ran the full suite plus smoke checks on critical flows (auth, APIs, jobs). Migration without automated regression is a guess.

## How we ran it

We migrated in stages: SDK and TFM first, then packages, then ASP.NET Core breaking changes, and only then validation in a near-production environment. That kept the diff readable and made rollback cheaper if needed.

The outcome: an LTS codebase, cleaner dependencies, and a pipeline that matches what Microsoft actually supports today.
