/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Defines the Jellyfin.Networking.Configuration.NetworkConfiguration.
 * @export
 * @interface NetworkConfiguration
 */
export interface NetworkConfiguration {
    /**
     * Gets or sets a value indicating whether the server should force connections over HTTPS.
     * @type {boolean}
     * @memberof NetworkConfiguration
     */
    RequireHttps?: boolean;
    /**
     * Gets or sets the filesystem path of an X.509 certificate to use for SSL.
     * @type {string}
     * @memberof NetworkConfiguration
     */
    CertificatePath?: string;
    /**
     * Gets or sets the password required to access the X.509 certificate data in the file specified by Jellyfin.Networking.Configuration.NetworkConfiguration.CertificatePath.
     * @type {string}
     * @memberof NetworkConfiguration
     */
    CertificatePassword?: string;
    /**
     * Gets or sets a value used to specify the URL prefix that your Jellyfin instance can be accessed at.
     * @type {string}
     * @memberof NetworkConfiguration
     */
    BaseUrl?: string;
    /**
     * Gets or sets the public HTTPS port.
     * @type {number}
     * @memberof NetworkConfiguration
     */
    PublicHttpsPort?: number;
    /**
     * Gets or sets the HTTP server port number.
     * @type {number}
     * @memberof NetworkConfiguration
     */
    HttpServerPortNumber?: number;
    /**
     * Gets or sets the HTTPS server port number.
     * @type {number}
     * @memberof NetworkConfiguration
     */
    HttpsPortNumber?: number;
    /**
     * Gets or sets a value indicating whether to use HTTPS.
     * @type {boolean}
     * @memberof NetworkConfiguration
     */
    EnableHttps?: boolean;
    /**
     * Gets or sets the public mapped port.
     * @type {number}
     * @memberof NetworkConfiguration
     */
    PublicPort?: number;
    /**
     * Gets or sets a value indicating whether the http port should be mapped as part of UPnP automatic port forwarding.
     * @type {boolean}
     * @memberof NetworkConfiguration
     */
    UPnPCreateHttpPortMap?: boolean;
    /**
     * Gets or sets the UDPPortRange.
     * @type {string}
     * @memberof NetworkConfiguration
     */
    UDPPortRange?: string;
    /**
     * Gets or sets a value indicating whether gets or sets IPV6 capability.
     * @type {boolean}
     * @memberof NetworkConfiguration
     */
    EnableIPV6?: boolean;
    /**
     * Gets or sets a value indicating whether gets or sets IPV4 capability.
     * @type {boolean}
     * @memberof NetworkConfiguration
     */
    EnableIPV4?: boolean;
    /**
     * Gets or sets a value indicating whether detailed SSDP logs are sent to the console/log.  \"Emby.Dlna\": \"Debug\" must be set in logging.default.json for this property to have any effect.
     * @type {boolean}
     * @memberof NetworkConfiguration
     */
    EnableSSDPTracing?: boolean;
    /**
     * Gets or sets the SSDPTracingFilter  Gets or sets a value indicating whether an IP address is to be used to filter the detailed ssdp logs that are being sent to the console/log.  If the setting \"Emby.Dlna\": \"Debug\" msut be set in logging.default.json for this property to work.
     * @type {string}
     * @memberof NetworkConfiguration
     */
    SSDPTracingFilter?: string;
    /**
     * Gets or sets the number of times SSDP UDP messages are sent.
     * @type {number}
     * @memberof NetworkConfiguration
     */
    UDPSendCount?: number;
    /**
     * Gets or sets the delay between each groups of SSDP messages (in ms).
     * @type {number}
     * @memberof NetworkConfiguration
     */
    UDPSendDelay?: number;
    /**
     * Gets or sets a value indicating whether address names that match Jellyfin.Networking.Configuration.NetworkConfiguration.VirtualInterfaceNames should be Ignore for the purposes of binding.
     * @type {boolean}
     * @memberof NetworkConfiguration
     */
    IgnoreVirtualInterfaces?: boolean;
    /**
     * Gets or sets a value indicating the interfaces that should be ignored. The list can be comma separated. <seealso cref=\"P:Jellyfin.Networking.Configuration.NetworkConfiguration.IgnoreVirtualInterfaces\" />.
     * @type {string}
     * @memberof NetworkConfiguration
     */
    VirtualInterfaceNames?: string;
    /**
     * Gets or sets the time (in seconds) between the pings of SSDP gateway monitor.
     * @type {number}
     * @memberof NetworkConfiguration
     */
    GatewayMonitorPeriod?: number;
    /**
     * Gets a value indicating whether multi-socket binding is available.
     * @type {boolean}
     * @memberof NetworkConfiguration
     */
    EnableMultiSocketBinding?: boolean;
    /**
     * Gets or sets a value indicating whether all IPv6 interfaces should be treated as on the internal network.  Depending on the address range implemented ULA ranges might not be used.
     * @type {boolean}
     * @memberof NetworkConfiguration
     */
    TrustAllIP6Interfaces?: boolean;
    /**
     * Gets or sets the ports that HDHomerun uses.
     * @type {string}
     * @memberof NetworkConfiguration
     */
    HDHomerunPortRange?: string;
    /**
     * Gets or sets the PublishedServerUriBySubnet  Gets or sets PublishedServerUri to advertise for specific subnets.
     * @type {Array<string>}
     * @memberof NetworkConfiguration
     */
    PublishedServerUriBySubnet?: Array<string>;
    /**
     * Gets or sets a value indicating whether Autodiscovery tracing is enabled.
     * @type {boolean}
     * @memberof NetworkConfiguration
     */
    AutoDiscoveryTracing?: boolean;
    /**
     * Gets or sets a value indicating whether Autodiscovery is enabled.
     * @type {boolean}
     * @memberof NetworkConfiguration
     */
    AutoDiscovery?: boolean;
    /**
     * Gets or sets the filter for remote IP connectivity. Used in conjuntion with <seealso cref=\"P:Jellyfin.Networking.Configuration.NetworkConfiguration.IsRemoteIPFilterBlacklist\" />.
     * @type {Array<string>}
     * @memberof NetworkConfiguration
     */
    RemoteIPFilter?: Array<string>;
    /**
     * Gets or sets a value indicating whether <seealso cref=\"P:Jellyfin.Networking.Configuration.NetworkConfiguration.RemoteIPFilter\" /> contains a blacklist or a whitelist. Default is a whitelist.
     * @type {boolean}
     * @memberof NetworkConfiguration
     */
    IsRemoteIPFilterBlacklist?: boolean;
    /**
     * Gets or sets a value indicating whether to enable automatic port forwarding.
     * @type {boolean}
     * @memberof NetworkConfiguration
     */
    EnableUPnP?: boolean;
    /**
     * Gets or sets a value indicating whether access outside of the LAN is permitted.
     * @type {boolean}
     * @memberof NetworkConfiguration
     */
    EnableRemoteAccess?: boolean;
    /**
     * Gets or sets the subnets that are deemed to make up the LAN.
     * @type {Array<string>}
     * @memberof NetworkConfiguration
     */
    LocalNetworkSubnets?: Array<string>;
    /**
     * Gets or sets the interface addresses which Jellyfin will bind to. If empty, all interfaces will be used.
     * @type {Array<string>}
     * @memberof NetworkConfiguration
     */
    LocalNetworkAddresses?: Array<string>;
    /**
     * Gets or sets the known proxies. If the proxy is a network, it\'s added to the KnownNetworks.
     * @type {Array<string>}
     * @memberof NetworkConfiguration
     */
    KnownProxies?: Array<string>;
    /**
     * Gets or sets a value indicating whether the published server uri is based on information in HTTP requests.
     * @type {boolean}
     * @memberof NetworkConfiguration
     */
    EnablePublishedServerUriByRequest?: boolean;
}

