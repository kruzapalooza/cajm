configure :development do
  activate :livereload
end

# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir,    "assets/stylesheets"
set :js_dir,     "assets/javascripts"
set :images_dir, "assets/images"

configure :build do
  # activate :minify_css
  # activate :minify_javascript
  # activate :asset_hash
end
