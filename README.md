# Chanpatia Vikas Portal — Angular UI demo

A responsive public dashboard prototype built with Angular 19. It contains example fund cards, a fund journey, project categories, searchable/filterable projects, a Hindi/English navigation and hero toggle, and a citizen request form demo.

## Run locally

Requirements: Node.js 20.11+ or 22.x and npm.

```bash
npm install
npm start
```

Open http://localhost:4200. For a production build, run `npm run build`.

## Important demo limitations

All fund figures, project counts, names, locations and progress values are invented sample data. The ₹4 crore card is labelled as an illustrative scheme recommendation limit, not money received personally by an MLA. The MLA name is provided as project context and should be verified before publication. Project data currently lives in `src/app/app.component.ts`. The request form deliberately does not save or transmit data. Only top-level navigation and hero copy switch language; full Hindi localization remains to be implemented.

To go live, connect a verified ASP.NET Core API with separate allocation, recommendation, sanction, release and expenditure records, source documents, audit history, administration roles and a secure request endpoint. Replace sample figures only after checking official records.
