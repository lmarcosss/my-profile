On our current project, we migrated the stack from **.NET 6**, **.NET 7**, and **.NET 8** to **.NET 10** across the different projects.

This migration was not just a `TargetFramework` change: we also had to review dependencies, build configuration, API versioning, containers, and compatibility issues introduced by the new runtime.

## Why migrate now

.NET 6 and .NET 7 are already out of support, while .NET 10 is an LTS release, offering a longer window for support, maintenance, and security.

Although .NET 8 was still supported, migrating those projects to .NET 10 let us standardize the solution on a single runtime version and avoid maintaining different framework versions across projects.

## What changed

### Target Framework and SDK

We migrated every project from its previous framework:

- .NET 6 → .NET 10
- .NET 7 → .NET 10
- .NET 8 → .NET 10

The projects now use .NET SDK **10.0.201**.

That gave us a consistent runtime target across the solution and reduced the need to keep version-specific configuration for different frameworks.

### Dependencies and packages

We reviewed and updated NuGet dependencies to ensure compatibility with .NET 10.

During the migration, we also found and fixed dependency issues, including a circular dependency between projects.

The upgrade process also helped surface dependencies that need a follow-up review because of support or version changes.

### API Versioning

As part of the ASP.NET Core update, we identified the need to migrate from the older library:

`Microsoft.AspNetCore.Mvc.Versioning`

to:

`Asp.Versioning.Mvc`

This change requires configuration and code adjustments because the versioning library used in older ASP.NET Core versions was replaced by a more current approach.

### Docker and containers

We also reviewed Docker build configuration and OS-related dependencies.

Along the way, we hit issues with repositories and packages used in the containers, including:

- `tzdata`
- `curl`

Those issues required adjustments to container configuration and the build process.

### AWS SDK

While reviewing dependencies, we also identified concerns around the support lifecycle of AWS SDK for .NET V3.

Because that is a larger change and independent from the framework upgrade, we decided to handle it separately — assessing impact first before a broader update.

### Restore and build

After the framework and dependency changes, we validated the projects with `dotnet restore` and a .NET 10 build.

Restore completed successfully, although some warnings related to AWS SDK dependencies were identified and reviewed separately.

## Things we paid attention to

The migration required more than simply changing `TargetFramework`, because the runtime upgrade also exposed compatibility issues in different parts of the solution.

The main points we reviewed were:

- Migrating from .NET 6, .NET 7, and .NET 8 to .NET 10
- Project and package compatibility with `net10.0`
- Circular dependencies between projects
- ASP.NET Core API Versioning changes
- Docker image and OS package compatibility
- AWS SDK version and support lifecycle
- Build and restore behavior with the new SDK
- Separating larger, independent changes from the main migration

## How we ran the migration

We migrated in stages:

1. SDK and Target Framework update
2. Dependency and package updates
3. Compatibility fixes
4. Container adjustments
5. Build and restore validation
6. Environment validation

Projects were migrated directly from their respective .NET 6, .NET 7, or .NET 8 versions to .NET 10, so we could standardize the solution on a single framework version.

When we found changes outside the main migration scope — such as a larger AWS SDK upgrade — we split them out for later evaluation, instead of expanding the upgrade unnecessarily.

## Outcome

The solution is now standardized on .NET 10, replacing projects that previously used .NET 6, .NET 7, and .NET 8.

During the process, we:

- Migrated every project to `net10.0`
- Standardized the build environment on .NET SDK 10.0.201
- Updated the required dependencies
- Resolved dependency issues
- Fixed Docker build-related problems
- Identified the required API Versioning changes
- Assessed the impact of dependencies with support-lifecycle changes
- Validated builds and restores with the new SDK

With that, we standardized the solution on a single supported LTS runtime, kept the migration focused, and left larger independent changes for follow-up work.
