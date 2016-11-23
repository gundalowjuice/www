<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(
  '*' => array(
    'server' => 'localhost',
    'tablePrefix' => 'craft',
  ),

  'gundalowjuice.dev' => array(
    'database' => 'gundalowjuice',
    'user' => 'homestead',
    'password' => 'secret',
  ),

  'gundalowjuice.com' => array(
    'database' => getenv('db'),
    'user' => getenv('db_username'),
    'password' => getenv('db_password'),
  )
);
