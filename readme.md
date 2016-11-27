## Fuel Your Ambitions

At Gundalow Juice, we are way more than just a healthy, delicious-tasting juice. We are uncompromising in our dedication to delivering an exceptional product that takes no shortcuts in processing, has zero additives, and is never watered down.

## Developer Notes

- [this repo assumes](https://github.com/gundalowjuice/www/blob/master/craft/config/db.php#L15) you are [running Craft locally via homestead](https://medium.com/@mattcollins_6/setting-up-a-local-dev-environment-for-craft-cms-using-laravel-homestead-2724be3954a5) 

- since Craft self-updates, `app`, `plugins` and `storage` are [kept out of the repository](https://github.com/gundalowjuice/www/blob/master/.gitignore#L15)

- for now, `composer.json` only lists the [phpdotenv](https://github.com/vlucas/phpdotenv) dependency, which is only required on the server

- during development, the site is [kept out of search engines](https://github.com/gundalowjuice/www/commit/2b8157f8374702683fd6963ff912a7fd11597a2d) ... I'm making a note here so we remember this once we go live!

- I learned that _MySQL 5.7.5+ changed the way `GROUP BY` behaved in order to be SQL99 compliant._ The workaround is [here](http://craftcms.stackexchange.com/questions/12084/getting-this-sql-error-group-by-incompatible-with-sql-mode-only-full-group-by). Apparently this will no longer be an issue with Craft 3 ... just making a note for our future selves.

### Misc links

- [setting up a local dev environment for Craft using Laravel Homestead](https://medium.com/@mattcollins_6/setting-up-a-local-dev-environment-for-craft-cms-using-laravel-homestead-2724be3954a5)
- [installing composer on macOS](https://www.abeautifulsite.net/installing-composer-on-os-x)
- [using phpdotenv with Craft CMS](https://mattstauffer.co/blog/environment-specific-configuration-for-craftcms-using-phpdotenv)
