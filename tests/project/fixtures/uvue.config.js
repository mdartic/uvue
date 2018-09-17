export default {
  plugins: [
    // Plugin to test hooks
    ['@/plugins/hooks', { foo: 'bar' }],
    // Plugin to test redirects
    '@/plugins/redirect',
    // Core plugins
    '@uvue/core/plugins/vuex',
  ],
};
