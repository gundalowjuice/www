<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(
  '*' => array(
    'tablePrefix' => 'craft',
  ),

  'gundalowjuice.dev' => array(
    'server' => 'localhost',
    'database' => 'gundalowjuice',
    'user' => 'homestead',
    'password' => 'secret',
  ),

  'craft.gundalowjuice.com' => array(
    'server' => getenv('DB_HOST'),
    'database' => getenv('DB_NAME'),
    'user' => getenv('DB_USER'),
    'password' => getenv('DB_PASSWORD'),
  )
);
