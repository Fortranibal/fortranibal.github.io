# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 15 static portfolio site** (`output: 'export'` in `next.config.ts`). There is no backend, no database, and no environment variables required.

### Quick reference

| Task | Command |
|------|---------|
| Install deps | `pnpm install` |
| Dev server | `pnpm dev` (port 3000) |
| Lint | `pnpm lint` |
| Build | `pnpm build` (static export to `./out`) |

### Notes

- Both `pnpm-lock.yaml` and `package-lock.json` exist; always use **pnpm** as the package manager per the README.
- The `sharp` native build script is ignored by pnpm's build policy. This is expected — images are configured as `unoptimized: true` in `next.config.ts`, so `sharp` is not needed at runtime.
- EmailJS keys for the contact form are hardcoded (public keys) — no secrets or `.env` files are needed.
- The `resend` dependency is listed in `package.json` but is not used in any source file.
