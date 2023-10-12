package validator

import (
	"fmt"

	"github.com/authelia/authelia/v4/internal/configuration/schema"
	"github.com/authelia/authelia/v4/internal/utils"
)

// ValidateIdentityValidation validates and updates the IdentityValidation configuration.
func ValidateIdentityValidation(config *schema.Configuration, validator *schema.StructValidator) {
	if config.IdentityValidation.ResetPassword.Expiration <= 0 {
		config.IdentityValidation.ResetPassword.Expiration = schema.DefaultIdentityValidation.ResetPassword.Expiration
	}

	switch {
	case len(config.IdentityValidation.ResetPassword.JWTAlgorithm) == 0:
		config.IdentityValidation.ResetPassword.JWTAlgorithm = schema.DefaultIdentityValidation.ResetPassword.JWTAlgorithm
	case !utils.IsStringInSlice(config.IdentityValidation.ResetPassword.JWTAlgorithm, validIdentityValidationJWTAlgorithms):
		validator.Push(fmt.Errorf("identity_validation: reset_password: option 'jwt_algorithm' must be one of %s but it's configured as '%s'", strJoinOr(validIdentityValidationJWTAlgorithms), config.IdentityValidation.ResetPassword.JWTAlgorithm))
	}

	if !config.AuthenticationBackend.PasswordReset.Disable && len(config.IdentityValidation.ResetPassword.JWTSecret) == 0 {
		validator.Push(fmt.Errorf("identity_validation: reset_password: option 'jwt_secret' is required when the reset password functionality isn't disabled"))
	}

	if config.IdentityValidation.CredentialManagement.Expiration <= 0 {
		config.IdentityValidation.CredentialManagement.Expiration = schema.DefaultIdentityValidation.CredentialManagement.Expiration
	}

	if config.IdentityValidation.CredentialManagement.ElevationExpiration <= 0 {
		config.IdentityValidation.CredentialManagement.ElevationExpiration = schema.DefaultIdentityValidation.CredentialManagement.ElevationExpiration
	}

	if config.IdentityValidation.CredentialManagement.Characters <= 0 {
		config.IdentityValidation.CredentialManagement.Characters = schema.DefaultIdentityValidation.CredentialManagement.Characters
	}
}
