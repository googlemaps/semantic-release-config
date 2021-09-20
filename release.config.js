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
            {
              type: "feat",
              section: "Features",
              hidden: false,
            },
            {
              type: "fix",
              section: "Bugs",
              hidden: false,
            },
            {
              type: "docs",
              section: "Docs",
              hidden: false,
            },
            {
              type: "style",
              section: "Other",
              hidden: false,
            },
            {
              type: "refactor",
              section: "Other",
              hidden: false,
            },
            {
              type: "perf",
              section: "Other",
              hidden: false,
            },
            {
              type: "test",
              section: "Other",
              hidden: false,
            },
            {
              type: "ci",
              section: "Other",
              hidden: false,
            },
            {
              type: "chore",
              section: "Other",
              hidden: false,
            },
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
