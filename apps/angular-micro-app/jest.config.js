module.exports = {
  name: 'angular-micro-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-micro-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
