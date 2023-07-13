#!/usr/bin/perl

use strict;
use warnings;

# Get the input and output file paths from the command-line arguments
my ($input_file, $pattern, $replacement) = @ARGV;

# Open input file for reading
open(my $input_fh, '<', $input_file) or die "Failed to open input file: $!";

# Read input file content
my $input = do { local $/; <$input_fh> };

# Close input file
close($input_fh);

# Perform substitution on input content
$input =~ s/$pattern/$replacement/g;

# Open output file for writing
open(my $output_fh, '>', $input_file) or die "Failed to open output file: $!";

# Write modified content to output file
print $output_fh $input;

# Close output file
close($output_fh);
