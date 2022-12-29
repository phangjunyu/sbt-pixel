import { useNavigate, TitleBar, Loading, useReact } from "@shopify/app-bridge-react";
import {
  Card,
  EmptyState,
  Layout,
  Page,
  SkeletonBodyText,
} from "@shopify/polaris";
import { QRCodeIndex, AccountConnect, CustomerWalletToggle } from "../components";

export default function HomePage() {

  /*
    Add an App Bridge useNavigate hook to set up the navigate function.
    This function modifies the top-level browser URL so that you can
    navigate within the embedded app and keep the browser in sync on reload.
  */
  const navigate = useNavigate();

  /*
    These are mock values. Setting these values lets you preview the loading markup and the empty state.
  */
  const isLoading = false;
  const isRefetching = false;
  const QRCodes = [];

  /* Set the QR codes to use in the list */
  const qrCodesMarkup = QRCodes?.length ? (
    <QRCodeIndex QRCodes={QRCodes} loading={isRefetching} />
  ) : null;

  /* loadingMarkup uses the loading component from AppBridge and components from Polaris  */
  const loadingMarkup = isLoading ? (
    <Card sectioned>
      <Loading />
      <SkeletonBodyText />
    </Card>
  ) : null;

  /* Use Polaris Card and EmptyState components to define the contents of the empty state */
  const emptyStateMarkup =
    !isLoading && !QRCodes?.length ? (
      <Card sectioned>
        <EmptyState
          heading="Create unique QR codes for your product"
          action={{
            content: "Create QR code",
            onAction: () => navigate("/qrcodes/new"),
          }}
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        >
          <p>
            Allow customers to scan codes and buy products using their phones.
          </p>
        </EmptyState>
      </Card>
    ) : null;

    const accountConnect = 
    !isLoading && !QRCodes?.length ? (
      <Card sectioned>
        <AccountConnect>
          
        </AccountConnect>
      </Card>
    ) : null;

    const customerWalletToggle = 
    !isLoading && !QRCodes?.length ? (
      <Card sectioned>
        <CustomerWalletToggle>
          
        </CustomerWalletToggle>
      </Card>
    ) : null;
  /*
    Use Polaris Page and TitleBar components to create the page layout,
    and include the empty state contents set above.
  */
  return (
    // <Page fullWidth={!!qrCodesMarkup}>
    //   <TitleBar
    //     title="QR codes"
    //     primaryAction={{
    //       content: "Create QR code",
    //       onAction: () => navigate("/qrcodes/new"),
    //     }}
    //   />
      <Page>
      <TitleBar
        title="Enable SBT Pixels"
      />
      <Layout>
        <Layout.Section>
          {loadingMarkup}
          {/* {qrCodesMarkup}
          {emptyStateMarkup} */}
          {accountConnect}
          {customerWalletToggle}
        </Layout.Section>
      </Layout>
    </Page>
  );
}
