# QR--Code-Generator

🔳 QR Code Generator with Name Recording

This is a simple web-based QR Code generator that allows users to enter names, generate QR codes, and keep a record of all submitted names. All submitted names are saved locally using `localStorage` and will persist even after the browser is closed or refreshed.

Features

- ✅ Enter any name or text to generate a QR code
- ✅ Each submission is recorded in a list below the form
- ✅ QR codes are dynamically generated using JavaScript
- ✅ Records are stored in `localStorage` (persistent browser storage)
- ✅ Works offline after the first load

 How It Works

1. User inputs a name in the form.
2. Upon clicking **Submit**:
   - A QR code is generated for the name.
   - The name is added to a list of recorded entries.
   - The name is saved in `localStorage` for persistence.
3. All recorded names are automatically loaded on page refresh.

