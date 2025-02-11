Dear Alice,

I've investigated the issue with site.recruitment.shq.nz and found that there's a DNS/SSL configuration issue. The site is running on IP 120.138.30.179, but the DNS records aren't correctly pointing to this IP address.

To verify this, I was able to access the site directly using the IP address and found the following code in the page source:

R2F1ci9FK0pYK2dFcWcxYWN3QlZlaXVCYmNzSmJCeWhNdHNpd3lFVlNOaz0

To fix this permanently, you'll need to:
1. Update your DNS records to point site.recruitment.shq.nz to 120.138.30.179
2. Ensure your SSL certificate is properly configured

In the meantime, you can access the site by adding this line to your hosts file:
120.138.30.179 site.recruitment.shq.nz

Let me know if you need any help implementing these changes.

Best regards,
Tapiwa karumbidza