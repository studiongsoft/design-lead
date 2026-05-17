# מדריך עבודה: מעצבים → קוד (Design to Code)

מאגר: [github.com/studiongsoft/design-lead](https://github.com/studiongsoft/design-lead)

חבילת npm: `@studiongsoft/design-lead`

## עקרון מנחה: שלוש שכבות

```text
┌─────────────────────────────────────────┐
│  שכבה 3: דפים (Pages)                  │
│  רק הרכבה של רכיבים קיימים + layout    │
├─────────────────────────────────────────┤
│  שכבה 2: Theme (@studiongsoft/design-lead) │
├─────────────────────────────────────────┤
│  שכבה 1: רכיבים (MUI / packages)       │
└─────────────────────────────────────────┘
```

---

## חוק 1: כל האתר RTL

```tsx
import { AppThemeProvider } from '@studiongsoft/design-lead';

export default function Root({ children }) {
  return <AppThemeProvider>{children}</AppThemeProvider>;
}
```

או:

```tsx
import { AppThemeProvider, DesignModeToggle } from '@studiongsoft/design-lead/theme';
```

### חריגי RTL

רשמו ב-[`docs/rtl-exceptions.md`](./docs/rtl-exceptions.md).

---

## חוק 2: דפים מרכיבים + תיעוד

- תיעוד: `design-decisions/` ([TEMPLATE](./design-decisions/TEMPLATE.md))
- צילומים: `design-snapshots/`

---

## חוק 3: Git וגרסאות

- branch לכל משימה · PR לפני main · `git revert` לrollback
- תגיות: `design-system-v1.x.x`

---

## חוק 4: התנגשות → Design Lead

תיוג PR: `needs-design-approval` — אין merge בלי אישור.

---

## חוק 5: Light + Dark

`createAppTheme()` מגדיר `colorSchemes`. בדקו עם `DesignModeToggle`.

---

## התקנה בפרויקט MUI / React

```bash
pnpm add @studiongsoft/design-lead
# או עד שיפורסם:
pnpm add github:studiongsoft/design-lead
```

```json
{
  "dependencies": {
    "@studiongsoft/design-lead": "github:studiongsoft/design-lead"
  }
}
```

Peer dependencies: `@mui/material`, `@emotion/react`, `@mui/stylis-plugin-rtl`, `stylis`, `react`.

---

## מבנה מאגר זה

```text
src/theme/           ← קוד npm
design-decisions/    ← תיעוד שינויים
design-snapshots/    ← צילומים
.cursor/rules/       ← חוקי Cursor
.github/             ← PR template, CODEOWNERS
```

---

## קישורים

- [Material UI – RTL](https://mui.com/material-ui/customization/right-to-left/)
- [Material UI – Dark mode](https://mui.com/material-ui/customization/dark-mode/)
