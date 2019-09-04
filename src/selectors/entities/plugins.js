// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {createSelector} from 'reselect';

export function getMarketplacePlugins(state) {
    return state.entities.plugins.marketplacePlugins.data;
}

export const getMarketplaceInstalledPlugins = createSelector(
    getMarketplacePlugins,
    (plugins) => {
        return Object.values(plugins).filter((p) => p.InstalledVersion !== '');
    }
);
