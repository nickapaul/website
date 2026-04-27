# Creative Theme for Jekyll

A Jekyll implementation of the [Creative Theme](http://startbootstrap.com/template-overviews/creative/) template by [Start Bootstrap](http://startbootstrap.com).

Creative is a one page Bootstrap theme for creatives, small businesses, and other multipurpose uses. The theme includes a number of rich features and plugins that you can use as a great boilerplate for your next Jekyll project!

See it live in action at <https://volny.github.io/creative-theme-jekyll/>

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Ruby**: Version 2.5.0 or higher. You can download it from [ruby-lang.org](https://www.ruby-lang.org/en/downloads/).
- **Bundler**: Install it by running `gem install bundler` in your terminal.
- **Jekyll**: This will be installed via the Gemfile.

## Installation

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd website
   ```

2. **Install dependencies**:
   ```
   bundle install
   ```
   This will install Jekyll and other required gems as specified in the `Gemfile`.

3. **Configure the site**:
   - Open `_config.yml` and update the site settings such as `title`, `email`, `description`, `baseurl`, and `url`.
   - The `baseurl` is set to "/website", which means the site is configured to be served from a subdirectory. Adjust if necessary.

## Running the Website

1. **Serve the site locally**:
   ```
   bundle exec jekyll serve
   ```
   - This will build the site and start a local server.
   - By default, the site will be available at `http://localhost:4000/website/` (due to the `baseurl` setting).

2. **Access the site**:
   - Open your web browser and navigate to `http://localhost:4000/website/`.
   - The main page is `index.html`, and there are additional service pages in the `service-pages/` directory.

3. **Build for production**:
   ```
   bundle exec jekyll build
   ```
   - This generates the static site in the `_site/` directory, which can be deployed to a web server.

## Debugging

If you encounter issues while running or building the site, here are some common troubleshooting steps:

1. **Check for errors in the terminal**:
   - When running `jekyll serve`, watch for error messages in the console. Common issues include missing dependencies or syntax errors in templates.

2. **Validate your configuration**:
   - Ensure `_config.yml` has valid YAML syntax. You can use an online YAML validator.
   - Check that all required fields are filled in.

3. **Clear the cache**:
   - Delete the `_site/` directory and `.jekyll-cache/` if they exist, then rebuild:
     ```
     rm -rf _site .jekyll-cache
     bundle exec jekyll serve
     ```

4. **Check for plugin issues**:
   - The site uses `github-pages` gem, which includes several plugins. If a plugin is causing issues, you can temporarily remove it from the Gemfile and reinstall.

5. **Browser developer tools**:
   - Use your browser's developer console (F12) to check for JavaScript errors or CSS issues.
   - Inspect elements to see if styles are loading correctly.

6. **Logs and verbose output**:
   - Run Jekyll with verbose output for more details:
     ```
     bundle exec jekyll serve --verbose
     ```

7. **Common issues**:
   - **Port already in use**: If port 4000 is busy, specify a different port: `jekyll serve --port 4001`.
   - **Baseurl issues**: If the site doesn't load correctly, ensure the `baseurl` in `_config.yml` matches your deployment path.
   - **Asset loading**: Check that CSS, JS, and image files are in the correct directories (`css/`, `js/`, `img/`).

## Project Structure

```
website/
├── _config.yml          # Site configuration
├── Gemfile              # Ruby dependencies
├── index.html           # Main page
├── service_ui.html      # Service UI page
├── uiTest.html          # UI test page
├── _includes/           # Reusable HTML components
│   ├── aside.html
│   ├── call-to-action.html
│   ├── contact.html
│   ├── head.html
│   ├── header.html
│   ├── nav.html
│   ├── portfolio.html
│   ├── scripts.html
│   └── values.html
├── _layouts/            # Page layouts
│   ├── default.html
│   ├── front.html
│   └── service.html
├── _sass/               # SCSS files
│   ├── _base.scss
│   └── _mixins.scss
├── css/                 # Compiled CSS and assets
│   ├── animate.min.css
│   ├── bootstrap.css
│   ├── bootstrap.min.css
│   └── main.scss
├── font-awesome/        # Font Awesome assets
├── fonts/               # Custom fonts
├── img/                 # Images
│   └── portfolio/
├── js/                  # JavaScript files
│   ├── bootstrap.js
│   ├── bootstrap.min.js
│   ├── cbpAnimatedHeader.js
│   ├── classie.js
│   ├── creative.js
│   ├── jquery.easing.min.js
│   ├── jquery.fittext.js
│   ├── jquery.js
│   └── wow.min.js
└── service-pages/       # Additional service pages
    ├── README.md
    ├── _includes/
    ├── assets/
    └── services/
```

## Customization

- **Content**: Edit the HTML files in the root or modify the includes in `_includes/`.
- **Styles**: Update SCSS files in `_sass/` and compile them using Jekyll's built-in Sass processor.
- **Layouts**: Customize page layouts in `_layouts/`.
- **Service Pages**: The `service-pages/` directory contains additional pages with their own structure. Refer to `service-pages/README.md` for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

