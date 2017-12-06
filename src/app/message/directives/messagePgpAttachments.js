/* @ngInject */
function messagePgpAttachments(gettextCatalog) {
    const title = gettextCatalog.getString('PGP/MIME Attachments Not Supported', null, 'Error');
    const message = gettextCatalog.getString(
        'This PGP/MIME message contains attachments which currently are not supported by ProtonMail.',
        null,
        'Error'
    );
    return {
        replace: true,
        restrict: 'E',
        template: `
                <div class="messagePgpAttachments-container">
                    <div class="messagePgpAttachments-notice">
                        <span class="messagePgpAttachments-notice-text">${title}</span>
                        <div class="messagePgpAttachments-notice-sub">${message}</div>
                    </div>
                </div>
            `
    };
}
export default messagePgpAttachments;
