steps from [tutorial](https://neutralino.js.org/docs/how-to/use-a-frontend-library/)

open terminal A:
```bash
cd app
npm i
npm run build
```

open terminal B:
```bash
neu update
```

terminal A:
```bash
npm run build
npm run dev
```

terminal B:
```bash
neu run --frontend-lib-dev
(or neu run -- --window-enable-inspector)
```

In my case, using Fedora, I also did:
```bash
sudo dnf install webkit2gtk4.0
```
