# Indeed Xray

A Tampermonkey userscript that reveals hidden company reviews on Indeed by removing blur effects and sign-in gates.

## Features

- Reveals blurred and hidden review text
- Works across multiple Indeed international domains
- Lightweight CSS-only implementation
- No data collection or external requests
- Automatic updates via Tampermonkey

## Installation

### Prerequisites

You need a userscript manager installed in your browser:

- **Chrome/Edge**: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- **Firefox**: [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) or [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
- **Safari**: [Tampermonkey](https://apps.apple.com/us/app/tampermonkey/id1482490089)

### Install the Script

1. Click here to install: [indeed-xray.user.js](https://github.com/moscovium-mc/indeed-xray/raw/main/indeed-xray.user.js)
2. Your userscript manager will prompt you to install
3. Click "Install" or "Confirm Installation"
4. Navigate to any Indeed company review page

The script will automatically activate on supported pages.

## Usage

Once installed, the script runs automatically on Indeed review pages. It will:

- Remove blur and opacity filters from review text
- Make all review content readable without sign-in
- Hide "Sign in to see full review" prompts
- All pros/cons sections are fully visible

No manual activation or configuration required.

## Supported Domains

- indeed.com (United States)
- uk.indeed.com (United Kingdom)
- ca.indeed.com (Canada)
- de.indeed.com (Germany)
- fr.indeed.com (France)
- au.indeed.com (Australia)

## How It Works

The script uses CSS overrides to:

1. Remove opacity and blur filters applied to review text
2. Hide gating buttons that prompt for sign-in
3. Restore normal text selection and interaction

This is a purely cosmetic modification using CSS. No API calls, no data manipulation, no network requests.

## Troubleshooting

### Script not working

- Verify your userscript manager is enabled
- Check that Indeed Xray shows as "enabled" in Tampermonkey
- Refresh the page (Ctrl+F5 or Cmd+Shift+R)
- Clear browser cache if issues persist

### Still seeing blurred text

Indeed may have updated their CSS classes. Please [open an issue](https://github.com/moscovium-mc/indeed-xray/issues) with:

- The URL where you're seeing the issue
- Your browser and userscript manager versions
- A screenshot if possible

## Updates

The script includes automatic update functionality. Tampermonkey will check for updates periodically and notify you when a new version is available.

## Contributing

Contributions are welcome. If Indeed changes their review page structure:

1. Fork this repository
2. Update the CSS selectors in `indeed-xray.user.js`
3. Test on multiple Indeed domains
4. Submit a pull request with a description of your changes

## Disclaimer

This script is provided for educational purposes. It removes CSS styling that obscures publicly available content on Indeed's website. Users should respect Indeed's Terms of Service and use this tool responsibly. The author is not responsible for any consequences of using this script.

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Author

**moscovium-mc**

- GitHub: [@moscovium-mc](https://github.com/moscovium-mc)

## Support

If you find this script useful:

- Star the repository
- Report bugs via [GitHub Issues](https://github.com/moscovium-mc/indeed-xray/issues)
- Share with others who might benefit

---

**Note**: This script does not bypass authentication, access private data, or modify Indeed's servers. It only removes CSS styling on the client side.
