# Karma/Electron hanging issue

This repo reproduces an issue that occurs with Karma and Electron when running
Jasmine tests using `client.useIframe = false`. To see the issue, first install
dependencies using `npm run install`, then run `npm run test-no-iframe`. The single test should run successfully, but hang after completion.

This issue doesn't happen when IFrames are enabled. Run `npm run test-iframe`
and you should see the tests run successfully and Karma exit properly with
status 0.

## Why does this matter?

IFrame's don't work with Electron's `nodeIntegration: true` option, so new
browser windows must be used instead.
