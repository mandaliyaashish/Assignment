
// Static Data which can generate scenario

module.exports = {
    challenges: [
        "Unit tests are brittle and frequently fail due to hardcoded test data",
        "Poor logging practices make debugging production issues difficult",
        "Frontend and backend teams are not aligned on data contract definitions",
        "Release notes are inconsistent or missing, leading to user confusion",
        "Dependencies are out of date, and upgrading introduces breaking changes"
      ],
      incidents: [
        "Continuous Integration (CI) pipeline failed silently, skipping critical tests",
        "A feature flag was misconfigured, exposing unfinished features to all users",
        "Static assets failed to load due to incorrect cache headers",
        "An expired access token caused third-party API calls to fail silently",
        "A memory leak in a Node.js worker caused the server to restart every few hours",
      ],
      troubleshootingSteps: [
        "Confirm the local `.env` file matches the staging/production environment",
        "Inspect browser dev tools and network logs for failed API requests",
        "Review recent dependency updates in `package.json` or `requirements.txt`",
        "Use linter and static analysis tools to catch silent errors",
        "Rebuild and restart the service locally with verbose logging enabled",
      ],
      recommendations: [
        "Improve test isolation by using mocks and stubs",
        "Introduce better Git branching strategies like GitFlow",
        "Standardize code formatting using Prettier and ESLint",
        "Add contract testing between services using tools like Pact",
        "Adopt semantic versioning to manage breaking API changes"
      ]
  };