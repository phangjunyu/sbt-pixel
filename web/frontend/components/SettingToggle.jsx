import {SettingToggle, DisplayText} from '@shopify/polaris';
import {useState, useCallback} from 'react';

export function CustomerWalletToggle() {
  const [active, setActive] = useState(false);

  const handleToggle = useCallback(() => setActive((active) => !active), []);

  const contentStatus = active ? 'Deactivate' : 'Activate';
  const textStatus = active ? 'activated' : 'deactivated';

  return (
    <SettingToggle
      action={{
        content: contentStatus,
        onAction: handleToggle,
      }}
      enabled={active}
    >
      Wallet Login on your store is{' '}
      <DisplayText variant="bodyMd" fontWeight="bold" as="span">
        {textStatus}
      </DisplayText>
      .
    </SettingToggle>
  );
}