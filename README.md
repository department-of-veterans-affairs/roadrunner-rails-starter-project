# Roadrunner Rails Starter Project

## Developer Setup

1. Install Ruby 2.3. (It is suggested to use a Ruby version manager such as [rbenv](https://github.com/rbenv/rbenv#installation) and then to [install Ruby 2.3](https://github.com/rbenv/rbenv#installing-ruby-versions)).
1. Install Bundler to manage dependencies: `gem install bundler`
1. Install [PhantomJS](http://phantomjs.org/) for testing:
 - if you have Mac and Homebrew: `brew install phantomjs`
 - otherwise, follow the instructions on the website
1. Setup the database: `bundle exec rake db:migrate`
1. Start the application: `bundle exec rails s`

## Commands
- `bundle exec rake lint` - Run the full suite of linters on the codebase.
- `bundle exec guard` - Runs the guard test server that reruns your tests after files are saved. Useful for TDD!
- `bundle exec rake security` - Run the suite of security scanners on the codebase.
- `bundle exec rake ci` - Run all build steps to be performed in CI.
