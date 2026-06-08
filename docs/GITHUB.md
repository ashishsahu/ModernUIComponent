# Publishing to GitHub Registry

After pushing this repository to a **public** GitHub repo, consumers can install components directly.

## 1. Create and push the repository

```bash
git remote remove origin   # if still pointing at registry-template
git remote add origin https://github.com/ashishsahu/ModernUIComponent.git
git add .
git commit -m "feat: ModernUI component registry"
git push -u origin main
git tag v1.0.0
git push origin v1.0.0
```

## 2. Validate the GitHub registry

```bash
npx shadcn@latest registry validate ashishsahu/ModernUIComponent
```

## 3. Consumer install commands

```bash
npx shadcn@latest list ashishsahu/ModernUIComponent
npx shadcn@latest add ashishsahu/ModernUIComponent/theme
npx shadcn@latest add ashishsahu/ModernUIComponent/button
npx shadcn@latest add ashishsahu/ModernUIComponent/login-form
```

Pin a release:

```bash
npx shadcn@latest add ashishsahu/ModernUIComponent/button#v1.0.0
```
