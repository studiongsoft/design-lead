# @studiongsoft/design-lead

Design-to-code governance and **RTL + light/dark** theme kit for [Material UI](https://mui.com/) teams.

Repository: **[github.com/studiongsoft/design-lead](https://github.com/studiongsoft/design-lead)**

## Install

```bash
pnpm add github:studiongsoft/design-lead
# or after publish to npm:
# pnpm add @studiongsoft/design-lead
```

Peer dependencies:

```bash
pnpm add @mui/material @emotion/react @mui/stylis-plugin-rtl stylis react react-dom
```

## Usage

```tsx
import { AppThemeProvider, DesignModeToggle } from '@studiongsoft/design-lead';

export default function App({ children }) {
  return (
    <AppThemeProvider>
      <DesignModeToggle />
      {children}
    </AppThemeProvider>
  );
}
```

Custom theme tokens:

```tsx
<AppThemeProvider
  themeOptions={{
    theme: {
      palette: { primary: { main: '#1976d2' } },
    },
  }}
>
  {children}
</AppThemeProvider>
```

## Designer rules

Read **[DESIGN-TO-CODE.md](./DESIGN-TO-CODE.md)** (Hebrew).

| Topic | Location |
|-------|----------|
| Change log template | [design-decisions/TEMPLATE.md](./design-decisions/TEMPLATE.md) |
| Screenshots | [design-snapshots/](./design-snapshots/) |
| RTL exceptions | [docs/rtl-exceptions.md](./docs/rtl-exceptions.md) |
| Cursor rules | [.cursor/rules/](./.cursor/rules/) |
| PR checklist | [.github/pull_request_template/design_system.md](./.github/pull_request_template/design_system.md) |

## Develop this package

```bash
pnpm install
pnpm build
```

## Use in the MUI monorepo (local link)

```bash
# in your app package.json:
"@studiongsoft/design-lead": "link:../design-lead"
```

Then `pnpm install` from the monorepo root.

## License

MIT © Studio NG Soft
