module.exports.redirects = {
  redirects: [
    // fixing legacy backlinks
    {
      from: '/docs/get_started/hello_world',
      to: '/js-sdk/4.x.x/get_started/hello_world',
    },
    {
      from: '/docs/changelog/version_3',
      to: '/js-sdk/4.x.x/changelog/tolgee_js_version_3',
    },
    {
      from: '/docs/changelog/tolgee_js_version_3',
      to: '/js-sdk/4.x.x/changelog/tolgee_js_version_3',
    },
    {
      from: '/docs/server_and_web_app/self_hosting/running_with_docker',
      to: '/platform/self_hosting/running_with_docker',
    },
    {
      from: '/docs/web_app',
      to: '/js-sdk/',
    },
    {
      from: '/docs/web_app/creating_repository',
      to: '/platform/getting_started/creating_project',
    },
    {
      from: '/docs/web_app/obtaining_api_key',
      to: '/platform/integrations/about_integrations',
    },
    {
      from: '/docs/web/using_with_react/react_preparing_for_production',
      to: '/js-sdk/integrations/react/installation',
    },
    {
      from: '/docs/server_and_web_app/self_hosting/configuration',
      to: '/platform/self_hosting/configuration',
    },
    {
      from: '/tolgee-for-svelte',
      to: '/integrations/svelte',
    },
    {
      from: '/platform/managing_api_keys',
      to: '/platform/account_settings/api_keys_and_pat_tokens',
    },
    {
      from: '/docs/web/understanding_tolgee_for_web',
      to: '/js-sdk/',
    },
    { from: '/docs/integrations', to: '/integrations/' },
    { from: '/integrations/all', to: '/integrations/' },
    {
      from: '/docs/icu_message_format',
      to: '/platform/translation_process/icu_message_format',
    },
    {
      from: '/server_and_web_app/self_hosting/configuration',
      to: '/platform/self_hosting/configuration',
    },
    {
      from: '/docs/web/using_with_angular/translating',
      to: '/js-sdk/integrations/angular/translating',
    },
    {
      from: '/docs/web/in_context',
      to: '/js-sdk/in-context',
    },
    { from: '/docs/', to: '/platform/' },
    {
      from: '/docs/web/using_with_react/installation',
      to: '/js-sdk/integrations/react/installation',
    },
    {
      from: '/blog/let-this-script-type-instead-of-you-when-you-record-your-browser',
      to: '/blog/let-this-script-type-instead-of-you',
    },
    {
      from: '/docs/web/get_started/preparing_for_production',
      to: '/js-sdk/providing-static-data',
    },
    { from: '/docs/web/get_started/hello_world', to: '/js-sdk/' },
    {
      from: '/docs/web/using_with_react/ssr/ssr',
      to: '/js-sdk/integrations/react/ssr/',
    },
    {
      from: '/platform/integration',
      to: '/platform/integrations/about_integrations',
    },
    {
      from: '/platform/introduction',
      to: '/platform/',
    },
    {
      from: '/platform/creating_project',
      to: '/platform/getting_started/creating_project',
    },
    {
      from: '/platform/namespaces',
      to: '/platform/translation_keys/namespaces',
    },
    {
      from: '/platform/translation_tools',
      to: '/platform/translation_process/translation_memory',
    },
    {
      from: '/platform/api-keys-and-pat-tokens',
      to: '/platform/account_settings/api_keys_and_pat_tokens',
    },
    {
      from: '/platform/icu_message_format',
      to: '/platform/translation_process/icu_message_format',
    },
    {
      from: '/platform/figma-plugin/setup',
      to: '/platform/integrations/figma_plugin/setup',
    },
    {
      from: '/platform/figma-plugin/usage',
      to: '/platform/integrations/figma_plugin/usage',
    },
    {
      from: '/platform/exporting_translations',
      to: '/platform/projects_and_organizations/export',
    },
  ],
  createRedirects(existingPath) {
    if (existingPath.indexOf('/js-sdk/5.x.x') === 0) {
      return [
        existingPath.replace('/js-sdk/5.x.x', '/js-sdk/5.0.0-alpha.2'),
        existingPath.replace('/js-sdk/5.x.x', '/js-sdk/5.0.0-alpha.1'),
      ];
    }
    if (existingPath.indexOf('/js-sdk/4.x.x') === 0) {
      return [existingPath.replace('/js-sdk/4.x.x', '/js-sdk')];
    }
    if (existingPath.indexOf('/js-sdk') === 0) {
      return [existingPath.replace('/js-sdk', '/docs/web')];
    }
    if (existingPath.indexOf('/platform/3.x.x') === 0) {
      return [
        existingPath.replace('/platform/3.x.x', '/platform/3.0.0-alpha.1'),
        existingPath.replace('/platform/3.x.x', '/platform/3.0.0-alpha.6'),
      ];
    }
    if (existingPath.indexOf('/platform') === 0) {
      return [existingPath.replace('/platform', '/docs/platform')];
    }
    return undefined;
  },
};
