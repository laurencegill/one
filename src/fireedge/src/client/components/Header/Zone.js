import React, { memo } from 'react'

import { MenuItem, MenuList } from '@material-ui/core'
import LanguageIcon from '@material-ui/icons/Language'

import HeaderPopover from 'client/components/Header/Popover'
import { Tr } from 'client/components/HOC'
import { ZoneLabel } from 'client/constants/translates'

const Zone = memo(() => (
  <HeaderPopover
    id="zone-menu"
    icon={<LanguageIcon />}
    IconProps={{ 'data-cy': 'header-zone-button' }}
    disablePadding
  >
    {({ handleClose }) => (
      <MenuList>
        <MenuItem onClick={handleClose}>
          {Tr(ZoneLabel)}
        </MenuItem>
      </MenuList>
    )}
  </HeaderPopover>
))

Zone.displayName = 'ZoneHeaderComponent'

export default Zone