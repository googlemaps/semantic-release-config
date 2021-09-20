/**
 * Copyright 2021 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *      Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const config = {
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [{ type: "docs", scope: "README", release: "patch" }],
      },
    ],
    [
      "semantic-release-interval",
      {
        duration: 1,
        units: "week",
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            { type: "feat", section: "Features" },
            { type: "feature", section: "Features" },
            { type: "fix", section: "Bug Fixes" },
            { type: "perf", section: "Performance Improvements" },
            { type: "revert", section: "Reverts" },
            { type: "docs", section: "Documentation", hidden: false },
            { type: "style", section: "Styles", hidden: false },
            { type: "chore", section: "Miscellaneous Chores", hidden: false },
            { type: "refactor", section: "Code Refactoring", hidden: false },
            { type: "test", section: "Tests", hidden: false },
            { type: "build", section: "Build System", hidden: false },
            { type: "ci", section: "Continuous Integration", hidden: false },
          ],
        },
      },
    ],
    "@semantic-release/github",
    "@semantic-release/npm",
    "@semantic-release/git",
  ],
  options: {
    debug: true,
  },
  branches: [
    "main",
    {
      name: "beta",
      prerelease: true,
    },
    {
      name: "alpha",
      prerelease: true,
    },
  ],
};

module.exports = config;
