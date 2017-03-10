<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
  '*' => array(
    'omitScriptNameInUrls' => true,
  ),

  // dev
  'gundalowjuice.dev' => array(
    'devMode' => true,
    'siteUrl'   => 'http://gundalowjuice.dev',
  ),

  // production
  'craft.gundalowjuice.com' => array(
    'cooldownDuration' => 0,
    'siteUrl'   => 'http://craft.gundalowjuice.com',
  )

);
